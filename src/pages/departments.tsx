import { PageContainer } from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import { Typography } from "@mui/material";

export default function DepartmentsPage() {
  return (
    <PageContainer className="flow flow-lg">
      <PageTitle>Departments</PageTitle>
      <Typography fontSize="1.5rem">A page for departments</Typography>
    </PageContainer>
  );
}
