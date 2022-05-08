import styled from "styled-components";

import { colors, ColorVariants } from "styles/theme";

interface TextProps {
	$size?: number; //px
	$lineHeight?: number;
	$color?: ColorVariants;
	$fontWeight?: number;
	$margin?: string;
}

export const StyleText = styled.div<TextProps>`
	font-size: ${({ $size }) => $size ?? "18"}px;
	color: ${({ $color }) => colors[$color ?? "black"]};
	line-height: ${({ $lineHeight }) => $lineHeight ?? 1};
	font-weight: ${({ $fontWeight }) => $fontWeight ?? "400"};
`;
