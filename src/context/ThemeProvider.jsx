import { createContext, useState } from "react";

// Dark mode exercise
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleThemeContext = () =>
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

  const isDark = theme === "light";
  const isLight = theme === "dark";

  const values = { toggleThemeContext, isDark, isLight, theme };

  return (
    <ThemeContext.Provider value={values}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {};
