import styled from "@emotion/styled";
import { Build, Message } from "@mui/icons-material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { List, ListSubheader as MuiListSubheader } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import { AppMenu, AppMenuItem } from "@olenbetong/appframe-mui";

import { ARTICLE_TITLE } from "./config";

const ListSubheader = styled(MuiListSubheader)`
  margin-block-start: 0.75rem;
  margin-block-end: 0.75rem;
  line-height: inherit;
`;

export function ApplicationMenu() {
  return (
    <AppMenu headerPrimary={ARTICLE_TITLE}>
      <List
        aria-labelledby="menu-firstsection-subhead"
        subheader={
          <ListSubheader id="menu-firstsection-subhead">
            {getLocalizedString("Menu subheadeer")}
          </ListSubheader>
        }
      >
        <AppMenuItem icon={<DirectionsCarIcon />} to={`/`}>
          {getLocalizedString("Front page")}
        </AppMenuItem>
        <AppMenuItem icon={<Build />} to={`/departments`}>
          {getLocalizedString("Departments")}
        </AppMenuItem>
        <AppMenuItem icon={<Message />} to={`/messages`}>
          {getLocalizedString("Messages")}
        </AppMenuItem>
      </List>
    </AppMenu>
  );
}
