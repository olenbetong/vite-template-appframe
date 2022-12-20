import BuildIcon from "@mui/icons-material/Build";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MessageIcon from "@mui/icons-material/Message";
import { List, Typography } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import { AppLayout, AppMenu, AppMenuItem, AppMenuSubheader, PageContainer } from "@olenbetong/appframe-mui";

import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom";

import { ARTICLE_ID, ARTICLE_TITLE } from "~/config";
import SamplePage from "~/pages";
import DepartmentsPage from "~/pages/departments";
import MessagesPage from "~/pages/messages";

function ErrorElement() {
	let error = useRouteError() as any;

	return (
		<PageContainer className="flow">
			<Typography variant="h1">Oops! An unexpected error occurred.</Typography>
			<Typography>
				{error.status} {error.statusText}
			</Typography>
		</PageContainer>
	);
}

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: (
				<AppLayout menu={<ApplicationMenu />}>
					<Outlet />
				</AppLayout>
			),
			errorElement: <ErrorElement />,
			children: [
				{ path: "departments", element: <DepartmentsPage /> },
				{ path: "messages", element: <MessagesPage /> },
				{ index: true, element: <SamplePage /> },
			],
		},
	],
	{ basename: "/" + ARTICLE_ID }
);

export function ApplicationMenu() {
	return (
		<AppMenu headerPrimary={getLocalizedString(ARTICLE_TITLE)}>
			<List
				aria-labelledby="menu-firstsection-subhead"
				subheader={
					<AppMenuSubheader id="menu-firstsection-subhead">{getLocalizedString("Menu subheadeer")}</AppMenuSubheader>
				}
			>
				<AppMenuItem icon={<DirectionsCarIcon />} to={`/`}>
					{getLocalizedString("Front page")}
				</AppMenuItem>
				<AppMenuItem icon={<BuildIcon />} to={`/departments`}>
					{getLocalizedString("Departments")}
				</AppMenuItem>
				<AppMenuItem icon={<MessageIcon />} to={`/messages`}>
					{getLocalizedString("Messages")}
				</AppMenuItem>
			</List>
		</AppMenu>
	);
}

export default function App() {
	return <RouterProvider router={router} />;
}
