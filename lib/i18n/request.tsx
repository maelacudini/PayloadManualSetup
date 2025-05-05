import {getRequestConfig} from 'next-intl/server';
import { LocaleType } from './types';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale: LocaleType = 'it';
 
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});