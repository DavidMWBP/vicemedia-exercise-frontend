import findShow from "lib/findShow";
import showsData from "shows.json";

test("it should output the correct show matched by id", () => {
	expect(findShow("b7", showsData.shows)).toStrictEqual({
		id: "b7",
		title: "VICE",
		episodes: 32,
		product_image_url: "/images/vicehbo.jpg"
	});
});
