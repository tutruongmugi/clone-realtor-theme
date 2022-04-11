import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D92228",
      dark: "rgb(169, 45, 45)",
    },
    secondary: {
      main: "#3377CC",
    },
  },
  spacing: 42,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "rgb(51, 51, 51)",
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 99,
          textTransform: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          "@media (min-width: 600px)": {
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      },
    },
  },
});
