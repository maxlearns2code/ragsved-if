import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sv', 'en', 'fr', 'es', 'uk', 'pl'],
  defaultLocale: 'sv'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
