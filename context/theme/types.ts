import { THEMES } from "@/utils/constants";

export type ThemeType = (typeof THEMES)[number];
export interface ThemeContextType {
  theme: ThemeType
  // eslint-disable-next-line no-unused-vars
  updateTheme: (theme: ThemeType) => void
}