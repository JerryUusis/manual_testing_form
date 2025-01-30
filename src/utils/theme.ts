import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2e5070",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          listStyleType: "number",
          paddingLeft: "1rem",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "list-item",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "small"
      },
    },
  },
});
