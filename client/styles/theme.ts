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
	grey: "#f5f5f5",
	blue: "#473bf0",
};

export type ColorVariants = keyof typeof colors;
