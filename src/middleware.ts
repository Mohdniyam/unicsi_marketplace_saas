import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const pathname = url.pathname
  const hostname = req.headers.get("host") || ""

  const accessToken = req.cookies.get("access_token")?.value

  console.log("🌐 Host:", hostname)
  console.log("📍 Path:", pathname)

  // =========================================================
  // 🟢 DOMAIN ROUTING (MOST IMPORTANT)
  // =========================================================

  // admin.unicsi.com → /admin
  if (hostname.startsWith("admin.")) {
    url.pathname = `/admin${pathname}`
  }

  // partner.unicsi.com → /partner
  if (hostname.startsWith("partner.")) {
    url.pathname = `/partner${pathname}`
  }

  // kam.unicsi.com → /kam
  if (hostname.startsWith("kam.")) {
    url.pathname = `/kam${pathname}`
  }

  // rewrite after domain detection
  if (url.pathname !== pathname) {
    return NextResponse.rewrite(url)
  }

  // =========================================================
  // 🟢 ROOT REDIRECT (logged user)
  // =========================================================
  if (pathname === "/") {
    if (!accessToken) return NextResponse.next()

    try {
      const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET)
      const { payload } = await jwtVerify(accessToken, secret)
      const role = payload.role as string

      if (role === "ADMIN")
        return NextResponse.redirect(new URL("/admin/dashboard", req.url))

      if (role === "PARTNER")
        return NextResponse.redirect(new URL("/partner/dashboard", req.url))

      if (role === "KEY_ACCOUNT_MANAGER")
        return NextResponse.redirect(new URL("/kam/dashboard", req.url))
    } catch {}
  }

  // =========================================================
  // 🟢 AUTH PAGE BLOCK (already logged in)
  // =========================================================
  if (pathname.startsWith("/auth")) {
    if (!accessToken) return NextResponse.next()

    try {
      const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET)
      const { payload } = await jwtVerify(accessToken, secret)
      const role = payload.role as string

      if (role === "ADMIN")
        return NextResponse.redirect(new URL("/admin/dashboard", req.url))

      if (role === "PARTNER")
        return NextResponse.redirect(new URL("/partner/dashboard", req.url))

      if (role === "KEY_ACCOUNT_MANAGER")
        return NextResponse.redirect(new URL("/kam/dashboard", req.url))
    } catch {}
  }

  // =========================================================
  // 🔒 PROTECTED ROUTES
  // =========================================================
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/partner") ||
    pathname.startsWith("/kam")
  ) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET)
      const { payload } = await jwtVerify(accessToken, secret)
      const role = payload.role as string

      if (pathname.startsWith("/admin") && role !== "ADMIN") {
        return NextResponse.redirect(new URL("/auth/login", req.url))
      }

      if (pathname.startsWith("/partner") && role !== "PARTNER") {
        return NextResponse.redirect(new URL("/auth/login", req.url))
      }

      if (pathname.startsWith("/kam") && role !== "KEY_ACCOUNT_MANAGER") {
        return NextResponse.redirect(new URL("/auth/login", req.url))
      }

      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
}
