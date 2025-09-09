export function getCanonicalUrl(path: string) {
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
