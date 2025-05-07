import { ThemeContext } from "@/context/theme/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return { theme, setTheme }
}