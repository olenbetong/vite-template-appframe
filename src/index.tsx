import "./styles/common.css";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import { AppErrorBoundary, theme } from "@olenbetong/appframe-mui";

import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";

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
				<Helmet>
					<title>{getLocalizedString(ARTICLE_TITLE)}</title>
				</Helmet>
				<App />
			</AppErrorBoundary>
		</ThemeProvider>
	</StyledEngineProvider>
);
