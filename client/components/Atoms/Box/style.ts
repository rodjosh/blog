import styled from "styled-components";


interface BoxProps {
    $margin?: string;
    $padding?: string;
    $display?: string;
  }

export const StyleBox = styled.div<BoxProps>`
    margin: ${({ $margin }) => $margin ?? "0"};
    padding: ${({ $padding }) => $padding ?? "0"};
    display: ${({ $display }) => $display ?? "flex"};
`;