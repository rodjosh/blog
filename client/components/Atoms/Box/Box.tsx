import { BaseComponentProps } from "types/props";

import { StyleBox } from "./style";

interface BoxProps extends BaseComponentProps {
    margin?: string;
    padding?: string;
    display?: string;
  }


const Box = ({
    margin,
    padding,
    display,
    className = "",
    children,
}: BoxProps) => {
    return (
        <StyleBox
            className={`atom-box ${className}`}
            $margin = {margin}
            $padding = {padding}
            $display = {display} 
            >
                {children}
        </StyleBox>
    )
}

export default Box