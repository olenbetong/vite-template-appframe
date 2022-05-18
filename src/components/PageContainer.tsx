import "./PageContainer.scss";

import { Container, ContainerProps } from "@mui/material";
import clsx from "clsx";

export function PageContainer({
  fullHeight,
  ...props
}: ContainerProps & { fullHeight?: boolean }) {
  return (
    <div
      className={clsx(
        "ObPageContainer-root",
        fullHeight && "ObPageContainer-fullHeight"
      )}
    >
      <Container
        {...props}
        className={clsx(props.className, "ObPageContainer-inner")}
      />
    </div>
  );
}
