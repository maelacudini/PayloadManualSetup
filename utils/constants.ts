import { LocaleType } from "@/lib/i18n/types";

export const THEMES = ['light', 'dark'] as const;
export const DEFAULT_THEME = THEMES[0];
export const COOKIE_NAME = 'NEXT_LOCALE';
export const LOCALES = ['en', 'it'] as const;
export const DEFAULT_LOCALE: LocaleType = LOCALES[0];
export const PUBLIC_URL = process.env.ENVIRONMENT === 'production' ? 'https://addwebsite.com' : `http://localhost:${process.env.PORT || 3000}`;

export const ICON_SIZE = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.6rem',
  xl: '2.4rem',
  xxl: '3.6rem',
}