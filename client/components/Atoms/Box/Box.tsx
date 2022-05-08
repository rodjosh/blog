import { ColorVariants } from "styles/theme";
import { BaseComponentProps } from "types/props";

import { StyleBox } from "./style";

export interface BoxProps extends BaseComponentProps {
	height?: number;
	width?: number;
	margin?: string;
	padding?: string;
	display?:
		| "block"
		| "inline-block"
		| "flex"
		| "inline-flex"
		| "grid"
		| "inline-grid";
	backgroundColor?: ColorVariants;
	borderRadius?: string;
	order?: number;
	flexGrow?: number;
	flexShrink?: number;
	flexBasis?: number | "auto";
	alignSelf?:
		| "auto"
		| "flex-start"
		| "flex-end"
		| "center"
		| "baseline"
		| "stretch";
}

const Box = ({
	height,
	width,
	margin,
	padding,
	display,
	backgroundColor,
	borderRadius,
	className = "",
	children,
	order,
	flexGrow,
	flexShrink,
	flexBasis,
	alignSelf,
}: BoxProps) => {
	return (
		<StyleBox
			className={`atom-box ${className}`}
			$height={height}
			$width={width}
			$margin={margin}
			$padding={padding}
			$display={display}
			$backgroundColor={backgroundColor}
			$borderRadius={borderRadius}
			$order={order}
			$flexGrow={flexGrow}
			$flexShrink={flexShrink}
			$flexBasis={flexBasis}
			$alignSelf={alignSelf}
		>
			{children}
		</StyleBox>
	);
};

export default Box;
