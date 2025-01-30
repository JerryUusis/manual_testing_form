import { render } from "@testing-library/react";
import { Theme, ThemeProvider, CssBaseline } from "@mui/material";

// Render DOM using MUI-theme
export const renderWithTheme = (element: React.ReactNode, theme: Theme) => {
  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
