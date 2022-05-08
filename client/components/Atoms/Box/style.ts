import styled from "styled-components";
import { colors, ColorVariants } from "styles/theme";

interface BoxProps {
	$height?: number;
	$width?: number;
	$margin?: string;
	$padding?: string;
	$display?: string;
	$backgroundColor?: ColorVariants;
	$borderRadius?: string;
	$order?: number;
	$flexGrow?: number;
	$flexShrink?: number;
	$flexBasis?: number | "auto";
	$alignSelf?:
		| "auto"
		| "flex-start"
		| "flex-end"
		| "center"
		| "baseline"
		| "stretch";
}

export const StyleBox = styled.div<BoxProps>`
	height: ${({ $height }) => $height}px;
	width: ${({ $width }) => $width}px;
	margin: ${({ $margin }) => $margin ?? "0"};
	padding: ${({ $padding }) => $padding ?? "0"};
	display: ${({ $display }) => $display ?? "block"};
	background-color: ${({ $backgroundColor }) =>
		colors[$backgroundColor ?? "white"]};
	border-radius: ${({ $borderRadius }) => $borderRadius};
	order: ${({ $order }) => $order ?? "0"};
	flex-grow: ${({ $flexGrow }) => $flexGrow ?? "unset"};
	flex-shrink: ${({ $flexShrink }) => $flexShrink ?? "unset"};
	flex-basis: ${({ $flexBasis }) => $flexBasis ?? "auto"};
	align-self: ${({ $alignSelf }) => $alignSelf ?? "auto"};
`;
