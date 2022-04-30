import { BaseComponentProps } from "types/props";

import { StyleBox } from "./style";

interface BoxProps extends BaseComponentProps {
    margin?: string;
    padding?: string;
    display?: string;
    order?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number|'auto';
    alignSelf?: | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch"
  }


const Box = ({
    margin,
    padding,
    display,
    className = "",
    children,
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf
}: BoxProps) => {
    return (
        <StyleBox
            className={`atom-box ${className}`}
            $margin = {margin}
            $padding = {padding}
            $display = {display}
            $order ={order}
            $flexGrow ={flexGrow}
            $flexShrink={flexShrink}
            $flexBasis={flexBasis}
            $alignSelf={alignSelf}
            >
                {children}
        </StyleBox>
    )
}

export default Box