export function getCanonicalUrl(path: string): string {
  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  let canonicalPath = path;
  if (!canonicalPath.startsWith("/")) {
    canonicalPath = "/" + canonicalPath;
  }
  if (!canonicalPath.endsWith("/")) {
    canonicalPath += "/";
  }
  return (siteUrl + canonicalPath).replace(/([^:]\/)\/+/g, "$1");
}

export function getPageCanonical(
  locale: string,
  pathWithoutLocale: string
): string {
  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const cleaned = pathWithoutLocale.replace(/^\/|\/$/g, "");
  let pathname: string;

  if (locale === "sv") {
    pathname = cleaned ? `/${cleaned}/` : `/`;
  } else {
    pathname = cleaned ? `/${locale}/${cleaned}/` : `/${locale}/`;
  }

  return `${siteUrl}${pathname}`.replace(/([^:]\/)\/+/g, "$1");
}
