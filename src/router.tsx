import { Typography } from "@mui/material";
import { PageContainer } from "@olenbetong/appframe-mui";
import { createBrowserRouter, useRouteError } from "react-router-dom";
import SamplePage from "~/pages";
import DepartmentsPage from "~/pages/departments";
import MessagesPage from "~/pages/messages";

import App from "./App";
import { ARTICLE_ID } from "./config";

function ErrorElement() {
  let error = useRouteError() as any;
  return (
    <PageContainer className="flow">
      <Typography variant="h1">Oops! An unexpected error occurred.</Typography>
      <Typography>
        {error.status} {error.statusText}
      </Typography>
    </PageContainer>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
      errorElement: <ErrorElement />,
      children: [
        { path: "departments", element: <DepartmentsPage /> },
        { path: "messages", element: <MessagesPage /> },
        { path: "*", element: <SamplePage /> },
      ],
    },
  ],
  { basename: "/" + ARTICLE_ID }
);
