import styled from "styled-components";
import { ColorVariants } from "styles/theme";

type Unit = "px" | "%" | "rem" | "em";

export type Size = number | [number, Unit];
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

  $margin?: number; //px
  $padding?: number; //px

  $overflow?: Overflow;
  $display?: Display;

  $borderRadius?: number; //px
  $backgroundColor?: ColorVariants;

  $order?: number;
  $flexGrow?: number;
  $flexShrink?: number;
  $flexBasis?: number | "auto";
  $alignSelf?: AlignSelf;
}

const getSize = (size?: Size) => {
  if (!size) return "auto";

  if (Array.isArray(size)) {
    return `${size[0]}${size[1]}`;
  }

  return `${size}px`;
};

const getSpacing = (spacing?: number) => {
  if (!spacing) return "0px";

  return `${spacing}px`;
};

export const StyleBox = styled.div<BoxProps>`
  display: ${({ $display }) => $display ?? "block"};
  overflow: ${({ $overflow }) => $overflow ?? "auto"};

  height: ${({ $height }) => getSize($height)};
  width: ${({ $width }) => getSize($width)};

  margin: ${({ $margin }) => getSpacing($margin)};
  padding: ${({ $padding }) => getSpacing($padding)};

  border-radius: ${({ $borderRadius }) => getSpacing($borderRadius)};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ?? "transparent"};

  flex-grow: ${({ $flexGrow }) => $flexGrow ?? "unset"};
  flex-shrink: ${({ $flexShrink }) => $flexShrink ?? "unset"};
  flex-basis: ${({ $flexBasis }) => $flexBasis ?? "auto"};
  align-self: ${({ $alignSelf }) => $alignSelf ?? "auto"};
  order: ${({ $order }) => $order ?? "0"};
`;
