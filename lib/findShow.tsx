import { Show } from "components/showOverview/show/Show";
import { ShowId, Shows } from "components/showOverview/ShowOverview";

export default function findShow(showId: ShowId, shows?: Shows): Show | null {
	if (!shows) return null;

	const foundShow = shows.find((show) => show.id === showId);
	if (foundShow) {
		return foundShow;
	} else if (shows[0]) {
		return shows[0];
	} else {
		return null;
	}
}
