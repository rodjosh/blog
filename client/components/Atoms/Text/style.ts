import styled from "styled-components";

import { colors, ColorVariants } from "styles/theme";
import { type Spacing, getSpacing } from "styles/utils";

export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

interface TextProps {
  $size?: number;
  $lineHeight?: number;
  $color?: ColorVariants;
  $fontWeight?: Weight;
  $margin?: Spacing;
}

export const StyleText = styled.div<TextProps>`
  ${({ $size, $fontWeight, $lineHeight, $color, $margin }: TextProps) => {
    let css = "";

    if ($size) css += `font-size: ${getSpacing($size)};`;
    if ($fontWeight) css += `font-weight: ${$fontWeight};`;
    if ($color) css += `color: ${colors[$color]};`;
    if ($lineHeight) css += `line-height: ${$lineHeight};`;
    if ($margin) css += `margin: ${getSpacing($margin)};`;

    return css;
  }}
`;
