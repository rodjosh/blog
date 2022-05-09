import { BaseComponentProps } from "types/props";

import { ColorVariants } from "styles/theme";
import { type Spacing } from "styles/utils";

import { StyleButton, type BorderStyle } from "./style";

export interface ButtonProps extends BaseComponentProps {
  backgroundColor?: ColorVariants;

  borderStyle?: BorderStyle;
  borderRadius?: Spacing;
  borderColor?: ColorVariants;
  borderWidth?: Spacing;

  padding?: Spacing;
  margin?: Spacing;
}

const Button = ({
  backgroundColor,

  borderStyle,
  borderRadius,
  borderColor,
  borderWidth,

  padding,
  margin,

  className,
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
      className={`atom-button ${className ?? ""}`}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
