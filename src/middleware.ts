import { NextRequest, NextResponse } from "next/server"

const locales = ["en", "ar"] as const

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    const referer = req.headers.get("referer") || ""
    const refererLocale = locales.find((locale) =>
        referer.includes(`/${locale}/`) || referer.endsWith(`/${locale}`)
    )

    const locale = refererLocale || "en"

    req.nextUrl.pathname = `/${locale}${pathname}`

    return NextResponse.redirect(req.nextUrl)
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
}
