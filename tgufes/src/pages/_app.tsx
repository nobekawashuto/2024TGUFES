// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import OpeningAnimation from '@/components/OpeningAnimation';
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000); // 2秒後にコンテンツを表示

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Head>
      <meta property="og:site_name" content="My Website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content="/images/tguOGP.jpg" />
      <meta name="twitter:image" content="/images/tguOGP.jpg" />
    </Head>
      {!isLoaded && <OpeningAnimation />}
      <div style={{ display: isLoaded ? 'block' : 'none' }}>
        <Component {...pageProps} />
      </div>
    <Analytics/>
    </>
  );
}
