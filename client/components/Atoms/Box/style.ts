import styled from "styled-components";

interface BoxProps {
  $margin?: string;
  $padding?: string;
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
  margin: ${({ $margin }) => $margin ?? "0"};
  padding: ${({ $padding }) => $padding ?? "0"};
  display: ${({ $display }) => $display ?? "block"};
  order: ${({ $order }) => $order ?? "0"};
  flex-grow: ${({ $flexGrow }) => $flexGrow ?? "unset"};
  flex-shrink: ${({ $flexShrink }) => $flexShrink ?? "unset"};
  flex-basis: ${({ $flexBasis }) => $flexBasis ?? "auto"};
  align-self: ${({ $alignSelf }) => $alignSelf ?? "auto"};
`;
