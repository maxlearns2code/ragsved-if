export function getCanonicalUrl(path: string) {
  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  let canonicalPath = path;

  if (canonicalPath.length > 0 && !canonicalPath.startsWith("/")) {
    canonicalPath = "/" + canonicalPath;
  }

  if (canonicalPath.length > 1 && !canonicalPath.endsWith("/")) {
    canonicalPath += "/";
  }

  return `${siteUrl}${canonicalPath}`;
}
