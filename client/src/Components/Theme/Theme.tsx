import React, { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

type ThemeProps = "light" | "dark";

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeProps>("dark");
  const [iconTheme, setIconTheme] = useState<ThemeProps>("light");

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTimeout(() => {
      setIconTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, 200);

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, iconTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
