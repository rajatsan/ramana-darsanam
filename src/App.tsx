import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "./Container";

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
        <Container />
      </div>
    </ThemeProvider>
  );
}

export default App;
