import "./Large.css";

import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "~/components/ErrorAlertFallback";
import LinearProgress from "~/components/LinearProgressAbsolute";
import { ARTICLE_TITLE } from "~/config";
import { ArrowBack, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";

import Menu from "./Menu";

export default function Layout({ children }) {
  let [open, setOpen] = useState(true);

  return (
    <>
      <AppBar
        color="primary"
        position="static"
        className={"LayoutLarge-appBar"}
        sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label={getLocalizedString("Menu")}
            sx={{ mr: 2 }}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <ArrowBack /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h1">{ARTICLE_TITLE}</Typography>
        </Toolbar>
      </AppBar>

      <Box
        className="app-view"
        sx={{
          pl: (t) => (open ? t.config.drawerWidth : 0),
          transition: "padding-left ease-in-out 200ms",
          position: "relative",
        }}
      >
        <Menu
          sx={{
            height: "100%",
            width: (t: Theme) => t.config.drawerWidth,
            transition: "left ease-in-out 200ms",
            position: "absolute",
            top: 0,
            left: (t: Theme) => (open ? 0 : "-" + t.config.drawerWidth),
            zIndex: (t: Theme) => t.zIndex.drawer,
            bgcolor: "background.paper",
            boxShadow: 1,
          }}
        />
        <main className="LayoutLarge-main">
          <Suspense fallback={<LinearProgress />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {children}
            </ErrorBoundary>
          </Suspense>
        </main>
      </Box>
    </>
  );
}
