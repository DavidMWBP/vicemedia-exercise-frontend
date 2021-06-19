import { media, theme } from "lib/GlobalStyle";
import styled from "styled-components";

export const StyledShowOverview = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	left: 50%;
	max-width: 100%;
	padding: 8px;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const StyledShowSelectorWrapper = styled.div`
	background-color: ${theme.colors.white};
	border: 1px solid ${theme.colors.darkGrey};
	box-shadow: var(--box-shadow-bottom);
	column-gap: 16px;
	display: flex;
	flex-direction: row;
	max-width: 100%;
	overflow-x: auto;
	padding: 16px 8px 42px;

	${media.mdUp} {
		max-width: 970px;
		padding: 32px 16px 56px;
	}
`;
