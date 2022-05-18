import { PageContainer } from "components/PageContainer";
import PageTitle from "components/PageTitle";

import { Typography } from "@mui/material";

export default function MessagesPage() {
  return (
    <PageContainer className="flow flow-lg">
      <PageTitle>Messages</PageTitle>
      <Typography fontSize="1.5rem">A page for messages</Typography>
    </PageContainer>
  );
}
