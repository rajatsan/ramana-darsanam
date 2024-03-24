import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AppContainer from "./components/AppContainer";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a237e",
    },
    secondary: {
      main: "#ff8f00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
