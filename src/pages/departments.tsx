import PageTitle from "~/components/PageTitle";

import { Typography } from "@mui/material";
import { PageContainer } from "@olenbetong/appframe-mui";

export default function DepartmentsPage() {
  return (
    <PageContainer className="flow flow-lg">
      <PageTitle>Departments</PageTitle>
      <Typography fontSize="1.5rem">A page for departments</Typography>
    </PageContainer>
  );
}
