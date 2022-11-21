import { Outlet } from "react-router-dom";

import { AppLayout } from "@olenbetong/appframe-mui";

import { ApplicationMenu } from "./AppMenu";

export default function RootLayout() {
  return (
    <AppLayout menu={<ApplicationMenu />}>
      <Outlet />
    </AppLayout>
  );
}
