import { AppProps } from 'next/dist/next-server/lib/router/router';
import * as React from 'react';

const App = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default App;
