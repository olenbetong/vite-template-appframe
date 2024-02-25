import BuildIcon from "@mui/icons-material/Build";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MessageIcon from "@mui/icons-material/Message";
import { List, Typography } from "@mui/material";
import { getLocalizedString } from "@olenbetong/appframe-core";
import {
	AppLayout,
	AppMenu,
	AppMenuItem,
	AppMenuSubheader,
	LinearProgress,
	PageContainer,
} from "@olenbetong/appframe-mui";

import { Outlet, RouterProvider, createBrowserRouter, useNavigation, useRouteError } from "react-router-dom";

import { ARTICLE_ID, ARTICLE_TITLE } from "~/config";

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

function NavigationIndicator() {
	let { state } = useNavigation();

	return state === "loading" ? <LinearProgress /> : null;
}

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: (
				<AppLayout menu={<ApplicationMenu />} title={getLocalizedString(ARTICLE_TITLE)}>
					<NavigationIndicator />
					<Outlet />
				</AppLayout>
			),
			errorElement: <ErrorElement />,
			children: [
				{ path: "departments", lazy: () => import("./pages/departments") },
				{ path: "messages", lazy: () => import("./pages/messages") },
				{ index: true, lazy: () => import("./pages") },
			],
		},
	],
	{ basename: "/" + ARTICLE_ID },
);

export function ApplicationMenu() {
	return (
		<AppMenu>
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
