'use server';

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  return (await cookies()).get(name)?.value;
}

export async function setCookie(cookie: ResponseCookie) {
  (await cookies()).set(cookie);
}