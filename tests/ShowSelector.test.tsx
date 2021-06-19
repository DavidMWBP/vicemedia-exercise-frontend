import ShowSelector from "components/showOverview/showSelector/ShowSelector";
import React from "react";
import renderer from "react-test-renderer";
import showsData from "shows.json";

jest.mock("next/dist/client/router", () => ({
	__esModule: true,
	useRouter: () => ({
		push: jest.fn(() => Promise.resolve(true))
	})
}));

it("renders correctly", () => {
	const tree = renderer
		.create(<ShowSelector {...showsData.shows[5]} isActive index={5} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
