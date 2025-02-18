import { Typography } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import { PageContainer, PageTitle } from "@olenbetong/appframe-mui";

export function Component() {
	return (
		<PageContainer className="flow flow-lg">
			<title>{getLocalizedString("Messages")}</title>
			<PageTitle>Messages</PageTitle>
			<Typography fontSize="1.5rem">A page for messages</Typography>
		</PageContainer>
	);
}
