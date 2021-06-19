import { media, theme } from "lib/GlobalStyle";
import Image from "next/image";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
	position: relative;
`;

export const StyledShowSelector = styled(Image)<{
	$isActive: boolean;
}>`
	background-color: ${theme.colors.grey};
	border: 1px solid ${theme.colors.darkGrey};
	border-radius: 32px;
	cursor: pointer;
	filter: brightness(100%);
	outline: none;
	text-align: center;
	transition: filter 200ms ease-in-out;

	${({ $isActive }) =>
		$isActive &&
		css`
			filter: brightness(70%);
		`}
`;

export const StyledImageWrapper = styled.div`
	height: 48px;
	width: 48px;

	${media.mdUp} {
		height: 64px;
		width: 64px;
	}
`;

export const StyledShowLabel = styled.div<{ isActive: boolean }>`
	bottom: var(--spacing-show-selector-negative);
	left: 50%;
	position: absolute;
	transform: translateX(-50%);

	${({ isActive }) =>
		isActive &&
		css`
			font-weight: 700;
		`}
`;
