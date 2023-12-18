import { Typography } from "@mui/material";
import { PageContainer, PageTitle } from "@olenbetong/appframe-mui";

export default function MessagesPage() {
	return (
		<PageContainer className="flow flow-lg">
			<PageTitle>Messages</PageTitle>
			<Typography fontSize="1.5rem">A page for messages</Typography>
		</PageContainer>
	);
}
