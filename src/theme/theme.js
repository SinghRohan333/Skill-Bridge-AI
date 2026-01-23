import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5", // Indigo (AI vibe)
    },
    secondary: {
      main: "#22C55E", // Green (growth)
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#475569",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",

    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },

    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        },
      },
    },
  },
});

export default theme;
