import Show from "components/showOverview/show/Show";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
	const tree = renderer
		.create(
			<Show
				id="1"
				title="Test Title"
				episodes={20}
				product_image_url="/someimage.png"
			/>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
