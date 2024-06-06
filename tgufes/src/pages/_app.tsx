// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import OpeningAnimation from '@/components/OpeningAnimation';

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
      {!isLoaded && <OpeningAnimation />}
      <div style={{ display: isLoaded ? 'block' : 'none' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
