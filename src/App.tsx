import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import theme from "theme";
import { ARTICLE_ID, ARTICLE_TITLE } from "~/config";
import LargeLayout from "~/layout/Large";
import SmallLayout from "~/layout/Small";
import SamplePage from "~/pages";
import DepartmentsPage from "~/pages/departments";
import MessagesPage from "~/pages/messages";

import { useMediaQuery } from "@mui/material";

function Layout({ children }) {
  let isSmall = useMediaQuery<typeof theme>((t) => t.breakpoints.down("lg"));
  let Component = isSmall ? SmallLayout : LargeLayout;

  return <Component>{children}</Component>;
}

export default function App() {
  return (
    <Router basename={ARTICLE_ID}>
      <Helmet>
        <title>{ARTICLE_TITLE}</title>
      </Helmet>
      <Layout>
        <Routes>
          <Route element={<DepartmentsPage />} path={`/departments`} />
          <Route element={<MessagesPage />} path={`/messages`} />
          <Route element={<SamplePage />} path="*" />
        </Routes>
      </Layout>
    </Router>
  );
}
