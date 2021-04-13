import type { AppProps } from "next/app";

import "styles/global.scss";

function _App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default _App;
