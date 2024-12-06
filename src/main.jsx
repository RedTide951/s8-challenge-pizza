import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
