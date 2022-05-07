import styled from "styled-components";

interface BoxProps {
  $margin?: number;
  $padding?: number;
  $display?: string;
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
  margin: ${({ $margin }) => $margin ?? "0"}px;
  padding: ${({ $padding }) => $padding ?? "0"}px;
  display: ${({ $display }) => $display ?? "block"};
  order: ${({ $order }) => $order ?? "0"};
  flex-grow: ${({ $flexGrow }) => $flexGrow ?? "unset"};
  flex-shrink: ${({ $flexShrink }) => $flexShrink ?? "unset"};
  flex-basis: ${({ $flexBasis }) => $flexBasis ?? "auto"};
  align-self: ${({ $alignSelf }) => $alignSelf ?? "auto"};
`;
