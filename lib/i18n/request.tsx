import { getRequestConfig } from 'next-intl/server';
import { getCookie } from '@/utils/functions/cookies';
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME } from '@/utils/constants';
 
export default getRequestConfig(async () => {
  const locale = await getCookie(LOCALE_COOKIE_NAME) || DEFAULT_LOCALE;
 
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});