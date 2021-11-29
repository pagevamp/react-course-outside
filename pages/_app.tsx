import 'scss/app.scss';
import 'scss/login.scss';
import type { AppProps } from 'next/app';
import 'windi.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
