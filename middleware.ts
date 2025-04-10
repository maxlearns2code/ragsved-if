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
  const path = request.nextUrl.pathname;

  if (
    hostname === "ragsvedsif-vk.vercel.app" ||
    hostname === "www.ragsvedsif-vk.vercel.app" ||
    hostname === "rif-volleyball.vercel.app"
  ) {
    const url = request.nextUrl.clone();
    const searchParams = url.search;

    const redirectUrl = new URL(
      `https://vb.xn--rgsvedsif-52a.se${path}${searchParams}`
    );

    return NextResponse.redirect(redirectUrl, 301);
  }

  const redirectMap: Record<string, string> = {
    "/about": "/om",
    "/men-teams": "/herrlag",
    "/youth-team": "/ungdomslag",
  };

  if (path in redirectMap) {
    return NextResponse.redirect(
      new URL(redirectMap[path], request.url),
      308
    );
  }

  if (path.startsWith("/teams/")) {
    const id = path.split("/")[2];
    return NextResponse.redirect(
      new URL(`/lag/${id}`, request.url),
      308
    );
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
