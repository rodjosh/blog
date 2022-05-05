import { ColorVariants } from "styles/theme";
import { BaseComponentProps } from "types/props";

import { StyleButton } from "./style";

export interface ButtonProps extends BaseComponentProps {
  backgroundColor?: ColorVariants;
  borderStyle?: string;
  borderRadius?: string;
  borderColor?: ColorVariants;
  borderWidth?: string;
  padding?: string;
  margin?: string;
}

const Button = ({
  backgroundColor,
  borderStyle,
  borderRadius,
  borderColor,
  borderWidth,
  padding,
  margin,
  className = "",
  children,
}: ButtonProps) => {
  return (
    <StyleButton
      $backgroundColor={backgroundColor}
      $borderStyle={borderStyle}
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      $borderWidth={borderWidth}
      $padding={padding}
      $margin={margin}
      className={`atom-button ${className}`}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
