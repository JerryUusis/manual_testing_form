import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2e5070",
    },
  },
  typography: {
    h1: {
      fontSize:"2rem"
    },
    h2: {
      fontSize:"1.5rem"
    },
    h3: {
      fontSize:"1rem",
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});
