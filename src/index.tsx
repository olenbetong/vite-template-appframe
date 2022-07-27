import "./styles/common.css";

import { createRoot } from "react-dom/client";
import { ARTICLE_ID } from "~/config";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";

import App from "./App";
import theme from "./theme";

if (process.env.NODE_ENV === "development") {
  if (window.location.pathname === "/") {
    window.location.pathname = `/${ARTICLE_ID}`;
  }
}

const root = createRoot(document.getElementById("root") as Element);
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
