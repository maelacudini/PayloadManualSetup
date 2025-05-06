import { LOCALES } from "@/utils/constants";

export type LocaleType = (typeof LOCALES)[number];
export enum FullLocale {
  en = 'English',
  it = 'Italiano',
}