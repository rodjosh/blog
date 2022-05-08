import styled from "styled-components";
import { ColorVariants } from "styles/theme";

interface BoxProps {
  $height?: number; // px
  $width?: number; // px
  $margin?: number;
  $padding?: number;
  $display?:
    | "block"
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "grid"
    | "inline-grid";
  $borderRadius?: number; //px
  $backgroundColor?: ColorVariants;
  $order?: number;
  $flexGrow?: number;
  $flexShrink?: number;
  $flexBasis?: number | "auto";
  $alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
}

export const StyleBox = styled.div<BoxProps>`
  height: ${({ $height }) => `${$height}px` ?? "auto"};
  width: ${({ $width }) => `${$width}px` ?? "auto"};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ?? "transparent"};
  margin: ${({ $margin }) => $margin ?? "0"}px;
  padding: ${({ $padding }) => $padding ?? "0"}px;
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "0"}px;
  display: ${({ $display }) => $display ?? "block"};
  order: ${({ $order }) => $order ?? "0"};
  flex-grow: ${({ $flexGrow }) => $flexGrow ?? "unset"};
  flex-shrink: ${({ $flexShrink }) => $flexShrink ?? "unset"};
  flex-basis: ${({ $flexBasis }) => $flexBasis ?? "auto"};
  align-self: ${({ $alignSelf }) => $alignSelf ?? "auto"};
`;
