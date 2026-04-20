export const SITE_NAME = 'palugada.tech';
export const BASE_URL = 'https://belum-ada';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/web_mockup.jpg`;

export function absoluteUrl(pathname = '/') {
  const normalizedPath = pathname === '/' ? '/' : `/${pathname.replace(/^\/+/, '')}`;
  return new URL(normalizedPath, BASE_URL).toString();
}
