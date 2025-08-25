import React from "react";

type ThemeProps = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeProps;
  iconTheme: ThemeProps;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps | null>(null);
