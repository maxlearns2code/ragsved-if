import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: ["sv", "en", "es", "fr", "de", "sr", "uk", "pl", "pt"],
  defaultLocale: "sv",
  localePrefix: "always",
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  
  const oldDomains = [
    "ragsvedsif-vk.vercel.app",
    "www.ragsvedsif-vk.vercel.app",
    "rif-volleyball.vercel.app",
  ];

  if (oldDomains.includes(hostname)) {
    const newUrl = `https://vb.xn--rgsvedsif-52a.se${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(newUrl, 301);
  }

  const response = intlMiddleware(request);

  if (response.status === 307) {
    const location = response.headers.get("location");
    return location ? NextResponse.redirect(location, 301) : response;
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
