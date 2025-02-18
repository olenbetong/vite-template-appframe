import "./styles/common.css";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import { AppErrorBoundary, theme } from "@olenbetong/appframe-mui";

import { createRoot } from "react-dom/client";

import App from "./App";
import { ARTICLE_ID, ARTICLE_TITLE } from "./config";

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
				<title>{getLocalizedString(ARTICLE_TITLE)}</title>
				<App />
			</AppErrorBoundary>
		</ThemeProvider>
	</StyledEngineProvider>,
);
