import styled from "styled-components";

import { colors, ColorVariants } from "styles/theme";

interface TextProps {
  $size?: number; //px
  $lineHeight?: number;
  $color?: ColorVariants;
}

export const StyleText = styled.p<TextProps>`
  font-size: ${({ $size }) => $size ?? "18px"};
  color: ${({ $color }) => colors[$color ?? "black"]};
  line-height: ${({ $lineHeight }) => $lineHeight ?? 1.2};
`;
