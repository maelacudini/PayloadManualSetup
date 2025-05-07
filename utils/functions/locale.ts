'use server';

import { cookies } from 'next/headers';
import { LOCALE_COOKIE_NAME, DEFAULT_LOCALE } from '../constants';
import { LocaleType } from '@/lib/i18n/types';

export async function getUserLocale() {
  return (await cookies()).get(LOCALE_COOKIE_NAME)?.value || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: LocaleType) {
  (await cookies()).set(LOCALE_COOKIE_NAME, locale);
}