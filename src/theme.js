// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra-small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (small laptops)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra-large devices
    },
  },
  typography: {
    h1: {
      fontSize: "5rem",
      "@media (min-width:600px)": { fontSize: "3rem" }, // sm
      "@media (min-width:960px)": { fontSize: "4rem" }, // md
    },
    h2: {
      fontSize: "1.75rem",
      "@media (min-width:600px)": { fontSize: "2.5rem" }, // sm
      "@media (min-width:960px)": { fontSize: "3rem" }, // md
      "@media (min-width:1280px)": { fontSize: "3.5rem" }, // lg
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": { fontSize: "1.125rem" }, // sm
      "@media (min-width:960px)": { fontSize: "1.25rem" }, // md
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;