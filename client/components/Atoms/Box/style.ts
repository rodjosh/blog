import styled from "styled-components";

import { colors, ColorVariants } from "styles/theme";
import { type Size, type Spacing, getSize, getSpacing } from "styles/utils";

export type Overflow = "visible" | "hidden" | "scroll" | "auto";

export type Display =
  | "block"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid";

export type AlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

interface BoxProps {
  $height?: Size;
  $width?: Size;

  $margin?: Spacing;
  $padding?: Spacing;

  $overflow?: Overflow;
  $display?: Display;

  $borderRadius?: Spacing;
  $backgroundColor?: ColorVariants;

  $order?: number;
  $flexGrow?: number;
  $flexShrink?: number;
  $flexBasis?: number | "auto";
  $alignSelf?: AlignSelf;
}

export const StyleBox = styled.div<BoxProps>`
  display: ${({ $display }) => $display ?? "block"};
  overflow: ${({ $overflow }) => $overflow ?? "auto"};

  height: ${({ $height }) => getSize($height)};
  width: ${({ $width }) => getSize($width)};

  margin: ${({ $margin }) => getSpacing($margin)};
  padding: ${({ $padding }) => getSpacing($padding)};

  border-radius: ${({ $borderRadius }) => getSpacing($borderRadius)};
  background-color: ${({ $backgroundColor }) =>
    colors[$backgroundColor ?? "transparent"]};

  flex-grow: ${({ $flexGrow }) => $flexGrow ?? "unset"};
  flex-shrink: ${({ $flexShrink }) => $flexShrink ?? "unset"};
  flex-basis: ${({ $flexBasis }) => $flexBasis ?? "auto"};
  align-self: ${({ $alignSelf }) => $alignSelf ?? "auto"};
  order: ${({ $order }) => $order ?? "0"};
`;
