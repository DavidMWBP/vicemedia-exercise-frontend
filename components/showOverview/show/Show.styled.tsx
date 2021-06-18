import { theme } from "lib/GlobalStyle";
import Image from "next/image";
import styled from "styled-components";

export const StyledShow = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 290px;
`;

export const StyledImage = styled(Image)``;

export const StyledMetadata = styled.div`
	text-align: center;
	text-transform: uppercase;
`;

export const StyledEpisodes = styled.div`
	font-size: var(--font-subtitle);
	color: ${theme.colors.grey};
	margin: 8px 0 0;
	font-weight: 700;
`;

export const StyledTitle = styled.h3`
	margin: 8px 0 0;
	padding: 0;
`;
