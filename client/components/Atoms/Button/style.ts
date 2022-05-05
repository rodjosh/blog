import styled from "styled-components";
import { colors, ColorVariants } from "styles/theme";

interface ButtonProps {
  $backgroundColor?: ColorVariants;
  $borderStyle?: string;
  $borderRadius?: string;
  $borderColor?: ColorVariants;
  $borderWidth?: string;
  $padding?: string;
  $margin?: string;
}

export const StyleButton = styled.button<ButtonProps>`
  background-color: ${({ $backgroundColor }) =>
    colors[$backgroundColor ?? "white"]};
  border-style: ${({ $borderStyle }) => $borderStyle ?? "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "0"};
  border-color: ${({ $borderColor }) => colors[$borderColor ?? "black"]};
  border-width: ${({ $borderWidth }) => $borderWidth ?? "medium"};
  padding: ${({ $padding }) => $padding ?? "0"};
  margin: ${({ $margin }) => $margin ?? "0"};
`;
