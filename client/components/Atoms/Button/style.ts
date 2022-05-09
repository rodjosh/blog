import styled from "styled-components";

import { colors, ColorVariants } from "styles/theme";
import { type Spacing, getSpacing } from "styles/utils";

export type BorderStyle =
  | "none"
  | "dotted"
  | "inset"
  | "dashed"
  | "solid"
  | "double"
  | "groove";

interface ButtonProps {
  $backgroundColor?: ColorVariants;

  $borderStyle?: BorderStyle;
  $borderRadius?: Spacing;
  $borderColor?: ColorVariants;
  $borderWidth?: Spacing;

  $padding?: Spacing;
  $margin?: Spacing;
}

export const StyleButton = styled.button<ButtonProps>`
  background-color: ${({ $backgroundColor }) =>
    colors[$backgroundColor ?? "transparent"]};

  border-style: ${({ $borderStyle }) => $borderStyle ?? "none"};
  border-radius: ${({ $borderRadius }) => getSpacing($borderRadius)};
  border-color: ${({ $borderColor }) => colors[$borderColor ?? "transparent"]};
  border-width: ${({ $borderWidth }) => getSpacing($borderWidth)};

  padding: ${({ $padding }) => getSpacing($padding)};
  margin: ${({ $margin }) => getSpacing($margin)};
`;
