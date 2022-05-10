import { BaseComponentProps } from "types/props";

import { ColorVariants } from "styles/theme";
import { type Spacing } from "styles/utils";

import { StyleText, Weight } from "./style";

export interface TextProps extends BaseComponentProps {
  size?: number; //px
  color?: ColorVariants;
  margin?: Spacing;

  lineHeight?: number;
  fontWeight?: Weight;
}

const Text = ({
  size,
  color,
  margin,

  lineHeight,
  fontWeight,

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
    >
      {children}
    </StyleText>
  );
};

export default Text;
