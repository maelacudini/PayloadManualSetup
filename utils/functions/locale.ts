'use server';

import {cookies} from 'next/headers';
import { DEFAULT_LOCALES } from '../constants';
import { LocaleType } from '@/lib/i18n/types';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || DEFAULT_LOCALES;
}

export async function setUserLocale(locale: LocaleType) {
  (await cookies()).set(COOKIE_NAME, locale);
}