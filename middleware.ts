import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: ["sv", "en", "es", "fr", "de", "sr", "uk", "pl"],
  defaultLocale: "sv",
  localePrefix: "always",
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");

  if (
    hostname === "ragsvedsif-vk.vercel.app" ||
    hostname === "www.ragsvedsif-vk.vercel.app" ||
    hostname === "rif-volleyball.vercel.app"
  ) {
    const url = request.nextUrl.clone();
    const redirectUrl = new URL(
      `https://vb.xn--rgsvedsif-52a.se${url.pathname}${url.search}`
    );
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = intlMiddleware(request);
  if (response.status === 307) {
    return NextResponse.redirect(response.headers.get("location") || "/", 301);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
