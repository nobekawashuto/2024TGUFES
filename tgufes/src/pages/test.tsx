import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderMenu from "@/components/headerMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <header id="header">
        <HeaderMenu />
        <div id="video-area">
          <video id="video" webkit-playsinline playsInline muted autoPlay loop controls/>
          <source src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-3-1/video/movie.mp4" type="video/mp4" />
          
          {/* poster：動画ファイルが利用できない環境で代替表示される画像
            webkit-playsinline：iOS 9までのSafari用インライン再生指定
            playsinline：iOS 10以降のSafari用インライン再生指定
            muted：音声をミュートさせる
            autoplay：動画を自動再生させる
            loop：動画をループさせる
            controls：コントロールバーを表示する */}


        </div>
      </header>

      <div id="container">
        <p>ここにコンテンツが入ります</p>
      </div>

    </>

  );
}
