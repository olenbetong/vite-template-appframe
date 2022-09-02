import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ARTICLE_ID, ARTICLE_TITLE } from "~/config";
import SamplePage from "~/pages";
import DepartmentsPage from "~/pages/departments";
import MessagesPage from "~/pages/messages";

import { getLocalizedString } from "@olenbetong/appframe-core";
import { AppLayout } from "@olenbetong/appframe-mui";

import { ApplicationMenu } from "./AppMenu";

export default function App() {
  return (
    <Router basename={ARTICLE_ID}>
      <Helmet>
        <title>{getLocalizedString(ARTICLE_TITLE)}</title>
      </Helmet>
      <AppLayout menu={<ApplicationMenu />}>
        <Routes>
          <Route element={<DepartmentsPage />} path={`/departments`} />
          <Route element={<MessagesPage />} path={`/messages`} />
          <Route element={<SamplePage />} path="*" />
        </Routes>
      </AppLayout>
    </Router>
  );
}
