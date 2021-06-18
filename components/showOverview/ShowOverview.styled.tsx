import { theme } from "lib/GlobalStyle";
import styled, { css } from "styled-components";

export const StyledShowOverview = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledShowSelectorWrapper = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 100%;
	overflow: hidden;
	overflow-x: auto;
	column-gap: 16px;
	padding-bottom: var(--spacing-show-selector);
	margin-top: 32px;
`;

export const StyledShow = styled.div`
	position: relative;
`;

export const StyledShowSelector = styled.div<{
	isActive: boolean;
	imageUri: string;
}>`
	padding: 24px;
	cursor: pointer;
	background-color: ${theme.colors.grey};
	transition: filter 200ms ease-in-out;
	border-radius: 32px;
	width: 65px;
	height: 65px;
	text-align: center;
	background-image: url(${({ imageUri }) => imageUri});
	background-size: cover;
	filter: brightness(100%);
	outline: none;

	${({ isActive }) =>
		isActive &&
		css`
			filter: brightness(50%);
		`};
`;

export const StyledShowLabel = styled.div<{ isActive: boolean }>`
	position: absolute;
	bottom: var(--spacing-show-selector-negative);
	left: 50%;
	transform: translateX(-50%);

	${({ isActive }) =>
		isActive &&
		css`
			font-weight: 700;
		`};
`;
