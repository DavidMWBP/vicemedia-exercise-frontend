import { createGlobalStyle } from "styled-components";

export const theme = {
	colors: {
		grey: "#f2f2f2",
		darkGrey: "#858585",
		black: "#000",
		white: "#fff"
	}
};

const sizes = {
	sm: "320px",
	md: "970px",
	lg: "1200px"
};

export const media = {
	smUp: `@media (min-width: ${sizes.sm})`,
	mdUp: `@media (min-width: ${sizes.md})`,
	lgUp: `@media (min-width: ${sizes.lg})`
};

export const GlobalStyle = createGlobalStyle`
	html {
		--font-size-title: 14px;
		--font-size-subtitle: 12px;

		--spacing-show-selector: 32px;
		--spacing-show-selector-negative: -32px;

		--box-shadow-bottom: 0 10px 10px -5px ${theme.colors.darkGrey};

		${media.mdUp} {
			--font-size-title: 16px;
			--font-size-subtitle: 14px;
			}
	}

	body {
		background-color: ${theme.colors.grey};
		box-sizing: border-box;
		font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		margin: 0;
		padding: 0;
	}

	* {
		box-sizing: border-box;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;
