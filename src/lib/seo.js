export const SITE_NAME = 'palugada.tech';
export const BASE_URL = 'https://palugadatech.my.id';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/public/logo_palugada_tech.png.jpg`;

export function absoluteUrl(pathname = '/') {
  const normalizedPath = pathname === '/' ? '/' : `/${pathname.replace(/^\/+/, '')}`;
  return new URL(normalizedPath, BASE_URL).toString();
}
