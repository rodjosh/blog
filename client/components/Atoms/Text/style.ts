import styled from "styled-components";

import { colors, ColorVariants } from "styles/theme";
import { type Spacing, getSpacing } from "styles/utils";

export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type TextDecoration = "underline" | "overline" | "none";

interface TextProps {
  $size?: number;
  $fontWeight?: Weight;
  $color?: ColorVariants;
  $lineHeight?: number;
  $margin?: Spacing;
  $textDecoration?: TextDecoration;
}

export const StyleText = styled.div<TextProps>`
  ${({
    $size,
    $fontWeight,
    $lineHeight,
    $color,
    $margin,
    $textDecoration,
  }: TextProps) => {
    let css = "";

    if ($size) css += `font-size: ${getSpacing($size)};`;
    if ($fontWeight) css += `font-weight: ${$fontWeight};`;
    if ($color) css += `color: ${colors[$color]};`;
    if ($lineHeight) css += `line-height: ${$lineHeight};`;
    if ($margin) css += `margin: ${getSpacing($margin)};`;
    if ($textDecoration) css += `text-decoration: ${$textDecoration};`;

    return css;
  }}
`;
