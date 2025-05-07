"use client";

import { createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState } from "react";
import { ThemeContextType, ThemeType } from "./types";
import { DEFAULT_THEME } from "@/utils/constants";

const defaultTheme: ThemeContextType = {
  theme: DEFAULT_THEME,
  updateTheme: () => {},
};

export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  useEffect(() => {
    if (!document.documentElement.hasAttribute("data-theme") ) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [])

  const updateTheme = useCallback((selectedTheme: ThemeType) => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};