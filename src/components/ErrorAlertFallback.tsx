import * as React from "react";

import { AlertProps } from "@mui/lab";
import { Alert, AlertTitle, Button } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";

export type ErrorAlertFallbackProps = AlertProps & {
  error: any;
};

export default function ErrorAlertFallback({
  className,
  error,
  ...props
}: ErrorAlertFallbackProps) {
  return (
    <Alert
      severity="error"
      className={className}
      {...props}
      action={
        <Button color="inherit" onClick={() => window.location.reload()}>
          {getLocalizedString("Reload page")}
        </Button>
      }
    >
      <AlertTitle>
        {getLocalizedString("An error occured. Try refreshing the page")}
      </AlertTitle>
      {error.toString()}
    </Alert>
  );
}
