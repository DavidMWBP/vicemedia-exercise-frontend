import ShowOverview, {
	ShowOverviewProps
} from "components/showOverview/ShowOverview";
import { showsFetcher } from "lib/hooks/useShows";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

function Home({ shows, showId }: ShowOverviewProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Vice - Shows</title>
			</Head>
			<ShowOverview shows={shows} showId={showId} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { id } = query;

	try {
		const shows = await showsFetcher("http://localhost:3001/shows");

		return {
			props: {
				shows,
				showId: id ?? null
			}
		};
	} catch (error) {
		return {
			props: {
				shows: null
			}
		};
	}
};

export default Home;
