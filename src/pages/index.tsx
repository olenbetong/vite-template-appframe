import styled from "@emotion/styled";
import { Link as MuiLink, Typography } from "@mui/material";
import { PageContainer } from "@olenbetong/appframe-mui";

import { Link } from "react-router-dom";

const StyledLogo = styled.svg`
	animation: App-logo-spin infinite 20s linear;
	height: 40vmin;
	pointer-events: none;

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

type LogoProps = {
	className?: string;
};

function Logo({ className }: LogoProps) {
	return (
		<StyledLogo
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			fillRule="evenodd"
			strokeLinejoin="round"
			strokeMiterlimit="1.414"
			clipRule="evenodd"
			viewBox="0 0 850 850"
		>
			<g fill="currentColor">
				<path d="M648.259 213.911l6.911-6.279c-58.456-63.168-142.055-102.756-234.927-102.756-176.807 0-320.132 143.324-320.132 320.124 0 31.57 5.012 61.878 13.598 90.645l110.717-100.597c5.215-103.765 90.757-186.361 195.817-186.361 9.687 0 19.122.953 28.422 2.298L0 638.333h180.885l467.486-424.422h-.112zM615.358 446.281C604.76 544.69 521.47 621.315 420.244 621.315c-6.071 0-12.056-.365-17.985-.897L850 213.911H669.105L191.168 648.51s.919.926 1.164 1.178c58.058 58.877 138.699 95.436 227.912 95.436 176.806 0 320.13-143.322 320.13-320.124 0-28.541-4.008-56.102-11.059-82.428L615.358 446.281z"></path>
			</g>
		</StyledLogo>
	);
}

const LogoContainer = styled.div`
	color: var(--brand-primary);
	display: flex;
	justify-content: center;
	margin-block-start: 5rem;
	margin-block-end: 5rem;
`;

export default function SamplePage() {
	return (
		<PageContainer maxWidth="md">
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<Typography fontSize="1.5rem" textAlign="center">
				Edit <code>src/App.js</code> and save to reload.
			</Typography>
			<Typography fontSize="1.5rem" textAlign="center">
				You can also visit the{" "}
				<MuiLink component={Link} to={`/messages`}>
					messages
				</MuiLink>{" "}
				page
			</Typography>
		</PageContainer>
	);
}
