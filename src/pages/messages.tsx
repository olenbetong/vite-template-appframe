import { Typography } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import { PageContainer, PageTitle } from "@olenbetong/appframe-mui";

import { Helmet } from "react-helmet";

export function Component() {
	return (
		<PageContainer className="flow flow-lg">
			<Helmet>
				<title>{getLocalizedString("Messages")}</title>
			</Helmet>
			<PageTitle>Messages</PageTitle>
			<Typography fontSize="1.5rem">A page for messages</Typography>
		</PageContainer>
	);
}
