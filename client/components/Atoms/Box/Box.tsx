import { ColorVariants } from "styles/theme";
import { BaseComponentProps } from "types/props";

import {
  StyleBox,
  type Size,
  type Overflow,
  type Display,
  type AlignSelf,
} from "./style";

export interface BoxProps extends BaseComponentProps {
  display?: Display;
  overflow?: Overflow;

  height?: Size;
  width?: Size;

  margin?: number; // px
  padding?: number; // px

  borderRadius?: number; //px
  backgroundColor?: ColorVariants;

  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | "auto";
  alignSelf?: AlignSelf;
}

const Box = ({
  display,
  overflow,
  className,
  children,

  width,
  height,

  margin,
  padding,

  borderRadius,
  backgroundColor,

  order,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
}: BoxProps) => {
  return (
    <StyleBox
      $display={display}
      $overflow={overflow}
      className={`atom-box ${className ?? ""}`}
      $width={width}
      $height={height}
      $margin={margin}
      $padding={padding}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
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
