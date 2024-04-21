import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { indigo } from "@mui/material/colors";

import AppContainer from "./components/AppContainer";
import { ThemeContext, AppContext } from "./context";
import { PaletteMode } from "@mui/material";

const getTheme = (theme: PaletteMode) => {
  return createTheme({
    palette: {
      mode: theme,
      primary: {
        main: indigo[500],
      },
    },
  });
};

function App() {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const isMobile = width <= 768;

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const getUserTheme = () => {
    const themeFromLocalStorage = localStorage.getItem("theme");
    return (themeFromLocalStorage || "light") as PaletteMode;
  };

  const updateUserTheme = (userTheme: PaletteMode) => {
    localStorage.setItem("theme", userTheme);
    setTheme(userTheme);
  };

  const [theme, setTheme] = useState<PaletteMode>(getUserTheme()); // TODO initialize and set using localStorage
  const themeContextValue = { theme, setTheme: updateUserTheme };

  return (
    <AppContext.Provider value={{ isMobile }}>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeProvider theme={getTheme(theme)}>
          <CssBaseline />
          <div className="App">
            <AppContainer />
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
