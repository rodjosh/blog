import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Normalize />
      <GlobalStyle />
      <Story />
    </>
  ),
];
