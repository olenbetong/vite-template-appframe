import "./styles/common.css";

import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import { RouterProvider } from "react-router";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import { AppErrorBoundary, theme } from "@olenbetong/appframe-mui";

import { ARTICLE_ID, ARTICLE_TITLE } from "./config";
import { router } from "./router";

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
        <Helmet>
          <title>{getLocalizedString(ARTICLE_TITLE)}</title>
        </Helmet>
        <RouterProvider router={router} />
      </AppErrorBoundary>
    </ThemeProvider>
  </StyledEngineProvider>
);
