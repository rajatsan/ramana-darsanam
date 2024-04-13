import React, { useContext } from "react";

import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  PaletteMode,
  Select,
} from "@mui/material";
import { ThemeContext } from "../context";

export default function Settings() {
  return (
    <Box padding={2} paddingTop={4}>
      <ThemeSetting />
    </Box>
  );
}

function ThemeSetting() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Card variant="elevation" elevation={3}>
      <CardContent>
        <Box marginTop={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Change theme</InputLabel>
            <Select
              value={theme}
              label="Theme"
              onChange={(theme) => setTheme(theme.target.value as PaletteMode)}
            >
              <MenuItem value={"light"}>Light</MenuItem>
              <MenuItem value={"dark"}>Dark</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}
