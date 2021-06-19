import Show, { Show as ShowInterface } from "components/showOverview/show/Show";
import {
	StyledShowOverview,
	StyledShowSelectorWrapper
} from "components/showOverview/ShowOverview.styled";
import ShowSelector from "components/showOverview/showSelector/ShowSelector";
import { AnimatePresence, motion } from "framer-motion";
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
	const { query } = useRouter();
	const { data, isError } = useShows(shows);
	const [selectedShow, setSelectedShow] = useState<ShowInterface | null>(
		findShow(showId, shows)
	);

	useEffect(() => {
		setSelectedShow(findShow(query.id, data));
	}, [query.id, data]);

	if (isError || !data) return <div>No shows have been found!</div>;

	return (
		<StyledShowOverview>
			<AnimatePresence>
				<div>
					{selectedShow && (
						<motion.div
							key={selectedShow.id}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", bounce: 0.25, duration: 0.25 }}
							exit={{ scale: 0 }}
						>
							<Show {...selectedShow} />
						</motion.div>
					)}
				</div>
			</AnimatePresence>
			<StyledShowSelectorWrapper>
				{data?.map((show, index) => {
					return (
						<ShowSelector
							key={`show_${show.id}_${index}`}
							{...show}
							index={index}
							isActive={selectedShow?.id === show.id}
						/>
					);
				})}
			</StyledShowSelectorWrapper>
		</StyledShowOverview>
	);
}

export default ShowOverview;
