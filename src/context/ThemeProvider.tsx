import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ThemeId } from "./overlayThemes";

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeId>("calm-blue");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeId | null;
    if (saved) setTheme(saved);
  }, []);

  const handleSetTheme = (id: ThemeId) => {
    localStorage.setItem("theme", id);
    setTheme(id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

