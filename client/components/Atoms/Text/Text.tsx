import { ColorVariants } from "styles/theme";
import { BaseComponentProps } from "types/props";

import { StyleText } from "./style";

interface TextProps extends BaseComponentProps {
	size?: string; //px
	lineHeight?: string;
	color?: ColorVariants;
	fontWeight?: number;
}

const Text = ({
	size,
	lineHeight,
	color,
	className = "",
	children,
	fontWeight,
}: TextProps) => {
	return (
		<StyleText
			className={`atom-text ${className}`}
			$color={color}
			$lineHeight={lineHeight}
			$size={size}
			$fontWeight={fontWeight}
		>
			{children}
		</StyleText>
	);
};

export default Text;
