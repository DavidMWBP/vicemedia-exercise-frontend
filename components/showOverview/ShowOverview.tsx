import Show, { Show as ShowInterface } from "components/showOverview/show/Show";
import {
	StyledShow,
	StyledShowLabel,
	StyledShowOverview,
	StyledShowSelector,
	StyledShowSelectorWrapper
} from "components/showOverview/ShowOverview.styled";
import findShow from "lib/findShow";
import useShows from "lib/hooks/useShows";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

export type Shows = Array<ShowInterface>;
export type ShowId = string | string[] | undefined;

export interface ShowOverviewProps {
	/** Shows fetched from an endpoint to render */
	shows: Shows;
	/** show id fetched from query param on initial load */
	showId?: ShowId;
}

function ShowOverview({
	shows,
	showId
}: ShowOverviewProps): JSX.Element | null {
	const { push, asPath, query } = useRouter();
	const { data, isError } = useShows(shows);
	const [selectedShow, setSelectedShow] = useState<ShowInterface | null>(
		findShow(showId, shows)
	);

	useEffect(() => {
		setSelectedShow(findShow(query.id, data));
	}, [query.id, data]);

	if (isError || !data) return <div>No shows have been found!</div>;

	function onShowButtonClick(show: ShowInterface) {
		const pathWithShowId = `/?id=${show.id}`;

		if (pathWithShowId !== asPath) {
			push(pathWithShowId, pathWithShowId, { shallow: true });
		}
	}

	return (
		<StyledShowOverview>
			{selectedShow && <Show {...selectedShow} />}
			<StyledShowSelectorWrapper>
				{data?.map((show, index) => {
					const isActive = selectedShow?.id === show.id;
					return (
						<StyledShow key={show.id}>
							<StyledShowLabel isActive={isActive}>{index + 1}</StyledShowLabel>
							<StyledShowSelector
								onClick={() => onShowButtonClick(show)}
								isActive={isActive}
								imageUri={show.product_image_url}
							></StyledShowSelector>
						</StyledShow>
					);
				})}
			</StyledShowSelectorWrapper>
		</StyledShowOverview>
	);
}

export default ShowOverview;
