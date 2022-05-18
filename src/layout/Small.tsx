import "./Small.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ARTICLE_TITLE } from "@/config";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";

import Menu from "./Menu";

function Toggle({ onToggle }) {
  return (
    <IconButton
      className="LayoutSmall-toggle"
      color="inherit"
      onClick={onToggle}
      size="large"
    >
      <MenuIcon />
    </IconButton>
  );
}

export default function Layout({ children }) {
  let [drawerOpen, setDrawerOpen] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  return (
    <div className="LayoutSmall-root">
      <AppBar color="primary" position="sticky" className="LayoutSmall-appBar">
        <Toolbar>
          <Toggle onToggle={() => setDrawerOpen((current) => !current)} />
          <Typography variant="h1">{ARTICLE_TITLE}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: "LayoutSmall-drawer" }}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Menu />
      </Drawer>
      {children}
    </div>
  );
}
