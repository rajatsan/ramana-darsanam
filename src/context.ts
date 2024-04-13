import { PaletteMode } from "@mui/material";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (newTheme: PaletteMode) => {},
});
