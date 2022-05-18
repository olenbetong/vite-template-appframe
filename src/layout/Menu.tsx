import "./Menu.css";

import MenuItem from "./MenuItem";

import styled from "@emotion/styled";
import { Build, Message } from "@mui/icons-material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Box, List, ListSubheader as MuiListSubheader } from "@mui/material";
import { SxProps } from "@mui/system";
import { getLocalizedString } from "@olenbetong/common";

const ListSubheader = styled(MuiListSubheader)`
  margin-block-start: 0.75rem;
  margin-block-end: 0.75rem;
  line-height: inherit;
`;

export default function MenuItems({ sx }: { sx?: SxProps }) {
  return (
    <Box
      component="nav"
      className="MenuItems-root"
      sx={{
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "#dfdfdf transparent",
        "&::-webkit-scrollbar": {
          width: ".4rem",
        },
        "&::-webkit-scrollbar-button": {
          display: "none",
        },
        "&::-webkit-scrollbar-thumb": {
          width: ".4rem",
          backgroundColor: "#dfdfdf",
        },
        ...sx,
      }}
    >
      <List
        aria-labelledby="menu-firstsection-subhead"
        subheader={
          <ListSubheader id="menu-firstsection-subhead">
            {getLocalizedString("Menu subheadeer")}
          </ListSubheader>
        }
      >
        <MenuItem icon={<DirectionsCarIcon />} to={`/`}>
          {getLocalizedString("Front page")}
        </MenuItem>
        <MenuItem icon={<Build />} to={`/departments`}>
          {getLocalizedString("Departments")}
        </MenuItem>
        <MenuItem icon={<Message />} to={`/messages`}>
          {getLocalizedString("Messages")}
        </MenuItem>
      </List>
    </Box>
  );
}
