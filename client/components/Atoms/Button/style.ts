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
  ${({
    $backgroundColor,
    $borderStyle,
    $borderRadius,
    $borderColor,
    $borderWidth,
    $padding,
    $margin,
  }: ButtonProps) => {
    let css = "";

    if ($backgroundColor)
      css += `background-color: ${colors[$backgroundColor]};`;
    if ($borderStyle) css += `border-style: ${$borderStyle};`;
    if ($borderRadius) css += `border-radius: ${getSpacing($borderRadius)};`;
    if ($borderColor) css += `border-color: ${colors[$borderColor]};`;
    if ($borderWidth) css += `border-width: ${getSpacing($borderWidth)};`;
    if ($padding) css += `padding: ${getSpacing($padding)};`;
    if ($margin) css += `margin: ${getSpacing($margin)};`;

    return css;
  }}
`;
