import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  
  * {
    font-family: 'DM Sans', sans-serif;
  }
`;

export const colors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#D3D3D3",
  blue: "#473BF0",
  transparent: "transparent",
};

export type ColorVariants = keyof typeof colors;
