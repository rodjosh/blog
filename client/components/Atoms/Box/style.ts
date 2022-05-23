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
  ${({
    $display,
    $overflow,
    $height,
    $width,
    $margin,
    $padding,
    $borderRadius,
    $backgroundColor,
    $flexGrow,
    $flexShrink,
    $flexBasis,
    $alignSelf,
    $order,
  }: BoxProps) => {
    let css = "";

    if ($display) css += `display: ${$display};`;
    if ($overflow) css += `overflow: ${$overflow};`;
    if ($height) css += `height: ${getSize($height)};`;
    if ($width) css += `width: ${getSize($width)};`;
    if ($margin) css += `margin: ${getSpacing($margin)};`;
    if ($padding) css += `padding: ${getSpacing($padding)};`;
    if ($borderRadius) css += `border-radius: ${getSpacing($borderRadius)};`;
    if ($backgroundColor)
      css += `background-color: ${colors[$backgroundColor]};`;
    if ($flexGrow) css += `flex-grow: ${$flexGrow};`;
    if ($flexShrink) css += `flex-shrink: ${$flexShrink};`;
    if ($flexBasis) css += `flex-basis: ${$flexBasis};`;
    if ($alignSelf) css += `align-self: ${$alignSelf};`;
    if ($order) css += `order: ${$order}`;

    return css;
  }}
`;
