import { ColorVariants } from "styles/theme";
import { BaseComponentProps } from "types/props";

import { StyleText } from "./style";

interface TextProps extends BaseComponentProps {
  size?: number; //px
  lineHeight?: number;
  color?: ColorVariants;
}

const Text = ({
  size,
  lineHeight,
  color,
  className = "",
  children,
}: TextProps) => {
  return (
    <StyleText
      className={`atom-text ${className}`}
      $color={color}
      $lineHeight={lineHeight}
      $size={size}
    >
      {children}
    </StyleText>
  );
};

export default Text;
