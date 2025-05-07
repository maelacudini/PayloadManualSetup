import { LOCALES } from "@/utils/constants";

export type LocaleType = (typeof LOCALES)[number];
export enum FullLocale {
  // eslint-disable-next-line no-unused-vars
  en = 'English',
  // eslint-disable-next-line no-unused-vars
  it = 'Italiano',
}