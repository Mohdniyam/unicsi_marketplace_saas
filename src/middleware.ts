// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// import { jwtVerify } from "jose"

// export async function middleware(req: NextRequest) {
//   console.log("🔍 Middleware running for:", req.nextUrl.pathname)

// //   return NextResponse.next()
  
//   const accessToken = req.cookies.get("access_token")?.value

//   console.log("Access token:", accessToken)

  
//   if (!accessToken) {
//     console.log("❌ No access token - redirecting to login")
//     return NextResponse.redirect(new URL("/auth/login", req.url))
//   }

//   try {
//     // Decode JWT to get role
//     const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET)
//     const { payload } = await jwtVerify(accessToken, secret)
    
//     const userRole = payload.role as string
//     console.log("👤 User role from JWT:", userRole)

//     const pathname = req.nextUrl.pathname

//     // Role-based access control (match your backend roles)
//     if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
//       console.log("❌ Not ADMIN - access denied")
//       return NextResponse.redirect(new URL("/auth/login", req.url))
//     }

//     if (pathname.startsWith("/partner") && userRole !== "PARTNER") {
//       console.log("❌ Not PARTNER - access denied")
//       return NextResponse.redirect(new URL("/auth/login", req.url))
//     }

//     if (pathname.startsWith("/kam") && userRole !== "KEY_ACCOUNT_MANAGER") {
//       console.log("❌ Not KEY_ACCOUNT_MANAGER - access denied")
//       return NextResponse.redirect(new URL("/auth/login", req.url))
//     }

//     console.log("✅ Access granted for role:", userRole)
//     return NextResponse.next()
    
//   } catch (error) {
//     console.log("❌ Invalid token:", error)
//     return NextResponse.redirect(new URL("/auth/login", req.url))
//   }
// }

// export const config = {
//   matcher: [
//     "/admin/:path*", 
//     "/partner/:path*", 
//     "/kam/:path*"
//   ],
// }


import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"




export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const accessToken = req.cookies.get("access_token")?.value

  console.log("🔍 Middleware:", pathname)

  // ------------------------------
  // 0️⃣ ROOT PAGE REDIRECT
  // ------------------------------
  if (pathname === "/") {
    if (!accessToken) {
      return NextResponse.next() // public landing page
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET)
      const { payload } = await jwtVerify(accessToken, secret)
      const role = payload.role as string

      if (role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url))
      }
      if (role === "PARTNER") {
        return NextResponse.redirect(new URL("/partner/dashboard", req.url))
      }
      if (role === "KEY_ACCOUNT_MANAGER") {
        return NextResponse.redirect(new URL("/kam/dashboard", req.url))
      }
    } catch {
      return NextResponse.next()
    }
  }

  // ------------------------------
  // 1️⃣ AUTH PAGES BLOCK (CRITICAL)
  // ------------------------------
  if (pathname.startsWith("/auth")) {
    if (!accessToken) {
      return NextResponse.next() // allow login/register
    }

    // Logged-in users should NOT see login page
    try {
      const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET)
      const { payload } = await jwtVerify(accessToken, secret)

      const role = payload.role as string

      // Redirect based on role
      if (role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url))
      }
      if (role === "PARTNER") {
        return NextResponse.redirect(new URL("/partner/dashboard", req.url))
      }
      if (role === "KEY_ACCOUNT_MANAGER") {
        return NextResponse.redirect(new URL("/kam/dashboard", req.url))
      }
    } catch {
      return NextResponse.next()
    }
  }

  // ------------------------------
  // 2️⃣ PROTECTED ROUTES
  // ------------------------------
  if (!accessToken) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET)
    const { payload } = await jwtVerify(accessToken, secret)
    const userRole = payload.role as string

    // Role-based access
    if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    if (pathname.startsWith("/partner") && userRole !== "PARTNER") {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    if (pathname.startsWith("/kam") && userRole !== "KEY_ACCOUNT_MANAGER") {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }
}

export const config = {
  matcher: [
    "/",
    "/admin/:path*",
    "/partner/:path*",
    "/kam/:path*",
    "/auth/:path*" // 🔥 THIS WAS MISSING
  ],
}
