import { ColorVariants } from "styles/theme";
import { BaseComponentProps } from "types/props";

import { StyleText } from "./style";

export interface TextProps extends BaseComponentProps {
  size?: number; //px
  lineHeight?: number;
  color?: ColorVariants;
  fontWeight?: number;
  margin?: string;
}

const Text = ({
  size,
  lineHeight,
  color,
  className = "",
  children,
  fontWeight,
  margin,
}: TextProps) => {
  return (
    <StyleText
      className={`atom-text ${className}`}
      $color={color}
      $lineHeight={lineHeight}
      $size={size}
      $fontWeight={fontWeight}
      $margin={margin}
    >
      {children}
    </StyleText>
  );
};

export default Text;
