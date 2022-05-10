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
  font-size: ${({ $size }) => getSpacing($size)};
  color: ${({ $color }) => colors[$color ?? "black"]};
  line-height: ${({ $lineHeight }) => $lineHeight ?? 1};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "400"};
  margin: ${({ $margin }) => getSpacing($margin)};
`;
