"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState 
} from "react";
import { ThemeContextType, ThemeType } from "./types";
import { DEFAULT_THEME } from "@/utils/constants";

const defaultTheme: ThemeContextType = {
  theme: DEFAULT_THEME,
  setTheme: () => {},
};

export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};