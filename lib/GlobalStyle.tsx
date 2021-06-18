import { createGlobalStyle } from "styled-components";

export const theme = {
	colors: {
		grey: "#b0b0b0",
		darkGrey: "#858585",
		black: "#000"
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
		--font-size-subtitle: 12px;

		--spacing-show-selector: 32px;
		--spacing-show-selector-negative: -32px;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		box-sizing: border-box;
	}

	* {
		box-sizing: border-box;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;
