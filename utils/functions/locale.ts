'use server';

import {cookies} from 'next/headers';
import { COOKIE_NAME, DEFAULT_LOCALE } from '../constants';
import { LocaleType } from '@/lib/i18n/types';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: LocaleType) {
  (await cookies()).set(COOKIE_NAME, locale);
}