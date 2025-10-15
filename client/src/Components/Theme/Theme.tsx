import React, { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

type ThemeProps = "light" | "dark";

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeProps>(() => {
    const saved = localStorage.getItem("theme");
    return (saved as ThemeProps) || "dark";
  });

  const [iconTheme, setIconTheme] = useState<ThemeProps>(
    theme === "dark" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    setTimeout(() => {
      setIconTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, 200);
  };

  return (
    <ThemeContext.Provider value={{ theme, iconTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
