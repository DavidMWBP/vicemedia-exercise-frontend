import {
	StyledEpisodes,
	StyledImage,
	StyledMetadata,
	StyledShow,
	StyledTitle
} from "components/showOverview/show/Show.styled";

export interface Show {
	id: string;
	title: string;
	episodes: number;
	product_image_url: string;
}

function Show({ title, episodes, product_image_url }: Show): JSX.Element {
	return (
		<StyledShow>
			<StyledImage
				src={product_image_url}
				alt={title}
				width={290}
				height={430}
				loading="eager"
			/>
			<StyledMetadata>
				<StyledEpisodes>{episodes} episodes</StyledEpisodes>
				<StyledTitle>{title}</StyledTitle>
			</StyledMetadata>
		</StyledShow>
	);
}

export default Show;
