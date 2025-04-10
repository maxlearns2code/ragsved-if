import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: ["sv", "en", "es", "fr", "de", "sr", "uk", "pl"],
  defaultLocale: "sv",
  localePrefix: "always",
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const locale = request.nextUrl.locale || "sv";

  const redirectMap: Record<string, string> = {
    "/about": `/${locale}/om`,
    "/men-teams": `/${locale}/herrlag`,
    "/youth-team": `/${locale}/ungdomslag`,
  };

  const basePath = path.replace(new RegExp(`^/${locale}`), "");

  if (redirectMap[basePath]) {
    return NextResponse.redirect(
      new URL(redirectMap[basePath], request.url),
      308
    );
  }

  if (basePath.startsWith("/teams/")) {
    const id = basePath.split("/")[2];
    return NextResponse.redirect(
      new URL(`/${locale}/lag/${id}`, request.url),
      308
    );
  }

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
    return NextResponse.redirect(redirectUrl, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
