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
      if (role === "RESELLER") {
        return NextResponse.redirect(new URL("/partner/link-shopify", req.url))
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
      if (role === "RESELLER") {
        return NextResponse.redirect(new URL("/partner/link-shopify", req.url))
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

    if (pathname.startsWith("/partner") && userRole !== "RESELLER") {
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
