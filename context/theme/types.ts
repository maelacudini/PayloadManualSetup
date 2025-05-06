import { THEMES } from "@/utils/constants";

export type ThemeType = (typeof THEMES)[number];
export interface ThemeContextType {
  theme: ThemeType
  updateTheme: (theme: ThemeType) => void
}