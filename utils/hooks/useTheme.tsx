import { ThemeContext } from "@/context/theme/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  
  return { theme, updateTheme }
}