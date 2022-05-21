import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";

import { GlobalStyle } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
