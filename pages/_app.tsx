import { GlobalStyle, theme } from "lib/GlobalStyle";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
			/>
		</Head>

		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	</>
);

export default App;
