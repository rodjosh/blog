
import { StyleFlexBox } from "./style";
import {BoxProps} from '../Box/Box';

interface FlexBoxProps extends BoxProps{
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
    gap,
	...restBoxProps
}: FlexBoxProps) => {
    return (
        <StyleFlexBox
            $display = "flex"
            $flexDirection = {flexDirection}
            $flexWrap = {flexWrap}
            $justifyContent ={justifyContent} 
            $alignItems={alignItems} 
            $alignContent={alignContent}
            $gap={gap} 
			{...restBoxProps}
            >
                {children}
        </StyleFlexBox>
    )
}

export default FlexBox
