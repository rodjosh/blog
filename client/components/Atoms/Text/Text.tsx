import { BaseComponentProps } from "types/props";

import { ColorVariants } from "styles/theme";
import { type Spacing } from "styles/utils";

import { StyleText, Weight, TextDecoration } from "./style";

export interface TextProps extends BaseComponentProps {
  size?: number; //px
  color?: ColorVariants;
  margin?: Spacing;
  lineHeight?: number;
  fontWeight?: Weight;
  textDecoration?: TextDecoration;
}

const Text = ({
  size,
  color,
  margin,

  lineHeight,
  fontWeight,

  textDecoration,

  className,
  children,
}: TextProps) => {
  return (
    <StyleText
      className={`atom-text ${className ?? ""}`}
      $color={color}
      $size={size}
      $margin={margin}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $textDecoration={textDecoration}
    >
      {children}
    </StyleText>
  );
};

export default Text;
