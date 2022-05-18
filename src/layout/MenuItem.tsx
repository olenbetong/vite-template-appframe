import "./MenuItem.css";

import { To } from "history";
import { NavLink } from "react-router-dom";

import {
  ListItem,
  ListItemIcon,
  ListItemProps,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

export type MenuItemProps = ListItemProps & {
  children: React.ReactNode | React.ReactNode[];
  info?: React.ReactNode | React.ReactNode[];
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  to: To;
  end?: boolean;
};

export default function MenuItem({
  children,
  end = true,
  info,
  to,
  icon,
}: MenuItemProps) {
  return (
    <li>
      <ListItem
        component={NavLink}
        to={to}
        className="AppMenuItem-root"
        end={end}
      >
        {icon && (
          <ListItemIcon sx={{ minWidth: "2.5rem" }}>{icon}</ListItemIcon>
        )}
        <ListItemText primary={children} />
        {info && <ListItemSecondaryAction>{info}</ListItemSecondaryAction>}
      </ListItem>
    </li>
  );
}
