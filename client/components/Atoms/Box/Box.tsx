import { ColorVariants } from "styles/theme";
import { BaseComponentProps } from "types/props";

import { StyleBox } from "./style";
export interface BoxProps extends BaseComponentProps {
  height?: number; // px
  width?: number; // px
  margin?: number; // px
  padding?: number; // px
  display?:
    | "block"
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "grid"
    | "inline-grid";
  borderRadius?: number; //px
  backgroundColor?: ColorVariants;
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
  width,
  height,
  borderRadius,
  backgroundColor,
  margin,
  padding,
  display,
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
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $margin={margin}
      $padding={padding}
      $display={display}
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
