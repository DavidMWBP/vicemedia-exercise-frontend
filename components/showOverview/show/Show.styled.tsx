import { media, theme } from "lib/GlobalStyle";
import Image from "next/image";
import styled from "styled-components";

export const StyledShow = styled.div`
	background-color: white;
	border: 1px solid ${theme.colors.darkGrey};
	border-radius: 4px;
	box-shadow: var(--box-shadow-bottom);
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	max-width: 290px;
	padding: 8px;

	${media.mdUp} {
		padding: 16px;
	}
`;

export const StyledImage = styled(Image)``;

export const StyledMetadata = styled.div`
	text-align: center;
	text-transform: uppercase;
`;

export const StyledEpisodes = styled.div`
	color: ${theme.colors.darkGrey};
	font-size: var(--font-size-subtitle);
	font-weight: 700;
	margin: 8px 0 0;
`;

export const StyledTitle = styled.h3`
	font-size: var(--font-size-title);
	margin: 8px 0 0;
	padding: 0;
`;
