import { Typography } from "@mui/material";
import { PageContainer, PageTitle } from "@olenbetong/appframe-mui";

export const Component = DepartmentsPage;

export function DepartmentsPage() {
	return (
		<PageContainer className="flow flow-lg">
			<PageTitle>Departments</PageTitle>
			<Typography fontSize="1.5rem">A page for departments</Typography>
		</PageContainer>
	);
}
