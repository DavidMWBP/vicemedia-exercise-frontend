import ShowOverview from "components/showOverview/ShowOverview";
import React from "react";
import renderer from "react-test-renderer";
import showsData from "shows.json";

jest.mock("next/dist/client/router", () => ({
	__esModule: true,
	useRouter: () => ({
		query: {},
		push: jest.fn(() => Promise.resolve(true))
	})
}));

it("renders correctly with the show titled 'Love Industries'", () => {
	const tree = renderer
		.create(<ShowOverview shows={showsData.shows} showId="e6" />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
