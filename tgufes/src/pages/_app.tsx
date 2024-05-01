import "@/styles/globals.css";
import type { AppProps } from "next/app";


// pages/_app.tsx
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
