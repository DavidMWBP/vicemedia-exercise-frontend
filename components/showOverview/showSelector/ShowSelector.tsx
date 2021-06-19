import { Show } from "components/showOverview/show/Show";
import {
	StyledImageWrapper,
	StyledShowLabel,
	StyledShowSelector,
	StyledWrapper
} from "components/showOverview/showSelector/ShowSelector.styled";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";

export interface ShowSelectorProps extends Show {
	index: number;
	isActive: boolean;
}

function ShowSelector({
	title,
	id,
	index,
	isActive,
	product_image_url
}: ShowSelectorProps): JSX.Element {
	const { push, asPath } = useRouter();

	function onShowButtonClick(id: ShowSelectorProps["id"]) {
		const pathWithShowId = `/?id=${id}`;

		if (pathWithShowId !== asPath) {
			push(pathWithShowId, pathWithShowId, { shallow: true });
		}
	}

	return (
		<StyledWrapper>
			<StyledShowLabel isActive={isActive}>{index + 1}</StyledShowLabel>
			<motion.div
				transition={{ type: "spring", bounce: 0.8, duration: 1 }}
				whileTap={{ scale: 1.2 }}
				whileHover={{ scale: 1.1 }}
			>
				<StyledImageWrapper>
					<StyledShowSelector
						src={product_image_url}
						alt={`show selector ${title}`}
						layout="fill"
						objectFit="cover"
						loading={index <= 10 ? "eager" : "lazy"}
						onClick={() => onShowButtonClick(id)}
						$isActive={isActive}
					></StyledShowSelector>
				</StyledImageWrapper>
			</motion.div>
		</StyledWrapper>
	);
}

export default ShowSelector;
