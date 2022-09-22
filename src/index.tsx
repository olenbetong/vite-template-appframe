import "./styles/common.css";

import { createRoot } from "react-dom/client";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { AppErrorBoundary, theme } from "@olenbetong/appframe-mui";

import App from "./App";
import { ARTICLE_ID } from "./config";

if (process.env.NODE_ENV === "development") {
  if (window.location.pathname === "/") {
    window.location.pathname = `/${ARTICLE_ID}`;
  }
}

const root = createRoot(document.getElementById("root") as Element);
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </ThemeProvider>
  </StyledEngineProvider>
);
