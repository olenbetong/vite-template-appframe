import { createPortal } from "react-dom";

import {
  Theme,
  Typography,
  TypographyProps,
  useMediaQuery,
} from "@mui/material";

export default function PageTitle(props: TypographyProps) {
  let isSmall = useMediaQuery((t: Theme) => t.breakpoints.down("lg"));
  let root = document.querySelector("#PageTitleSmallLayout");

  if (isSmall && root) {
    return createPortal(<Typography variant="h1" {...props} />, root);
  }

  return <Typography variant="h2" {...props} />;
}
