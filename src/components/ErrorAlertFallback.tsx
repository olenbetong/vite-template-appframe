import * as React from "react";
import { Button } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { AlertProps } from "@mui/lab";
import { getLocalizedString } from "@olenbetong/common";

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
