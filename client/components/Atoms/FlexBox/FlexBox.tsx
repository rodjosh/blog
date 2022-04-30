import { BaseComponentProps } from "types/props";

import { StyleFlexBox } from "./style";

interface FlexBoxProps extends BaseComponentProps {
    margin?: string;
    padding?: string;
    display?: "flex";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
	flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
	flexGrow?: number;
	justifyContent?:
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
	alignItems?:
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
	alignContent?:
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
	gap?: string;
  }


  const FlexBox = ({
    margin,
    padding,
    className = "",
    children,
    flexDirection,
    flexWrap,
    flexGrow,
    justifyContent,
    alignItems,
    alignContent,
    gap
}: FlexBoxProps) => {
    return (
        <StyleFlexBox
            className={`atom-box ${className}`}
            $margin = {margin}
            $padding = {padding}
            $display = "flex"
            $flexDirection = {flexDirection}
            $flexWrap = {flexWrap}
            $justifyContent ={justifyContent} 
            $alignItems={alignItems} 
            $alignContent={alignContent}
            $gap={gap} 
            >
                {children}
        </StyleFlexBox>
    )
}

export default FlexBox
