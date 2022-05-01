import { string } from "prop-types";
import styled from "styled-components";

import { StyleBox } from "../Box/style";

interface FlexBoxProps {
	$flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
	$flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
	$justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
		| "start"
		| "end"
		| "left"
		| "right";
	$alignItems?:
		| "stretch"
		| "flex-start"
		| "flex-end"
		| "center"
		| "baseline"
		| "first baseline"
		| "last baseline"
		| "start"
		| "end"
		| "self-start"
		| "self-end";
	$alignContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
		| "stretch"
		| "start"
		| "end"
		| "baseline"
		| "first baseline"
		| "last baseline";
	$gap?: string;
	$display: "flex";
}

export const StyleFlexBox = styled(StyleBox).attrs((props) => {
	display: "flex";
})<FlexBoxProps>`
	display: "flex";
	flex-direction: ${({ $flexDirection }) => $flexDirection ?? "row"};
	flex-wrap: ${({ $flexWrap }) => $flexWrap ?? "nowrap"};
	justify-content: ${({ $justifyContent }) =>
		$justifyContent ?? "flex-start"};
	align-items: ${({ $alignItems }) => $alignItems ?? "stretch"};
	align-content: ${({ $alignContent }) => $alignContent ?? "normal"};
	gap: ${({ $gap }) => $gap ?? "0"};
`;
