import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",       // default black
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,   // removes MUI default shadow
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "0.5rem 1.25rem",
          boxShadow: "none",       // ensure no shadow
        },
        containedPrimary: {
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#222222",
            boxShadow: "none",     // remove hover shadow too
          },
        },
        containedSecondary: {
          backgroundColor: "#9333ea",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#7e22ce",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;