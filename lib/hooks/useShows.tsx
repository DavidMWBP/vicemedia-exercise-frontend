import { Shows } from "components/showOverview/ShowOverview";
import useSWR from "swr";

export async function showsFetcher(url: string): Promise<Shows> {
	return fetch(url).then(async (r) => r.json());
}

export interface useShowsData {
	data?: Shows;
	isLoading: boolean;
	isError: boolean;
}

export default function useShows(initialData?: Shows): useShowsData {
	const { data, error } = useSWR("http://localhost:3001/shows", showsFetcher, {
		initialData
	});

	return {
		data: data,
		isLoading: !error && !data,
		isError: error
	};
}
