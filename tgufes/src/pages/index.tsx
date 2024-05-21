import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Schedule from "@/components/schedule";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let test = 'hello world'
  return (
    <>
      <HeaderMenu/>
      
      <ImageSlider /> 

      <Schedule/>
      <div className="sns">
        <h2 className="sns-title">SNS</h2>
        <br />
        <div className="sns-bg">
          <div className="sns-box">
            <h3 className="sub-title"><a href="https://twitter.com/TGUFES">X　@TGUFES</a></h3>
            公式Xプラグイン
          </div>
          <div className="sns-box">
            <h3 className="sub-title"><a href="https://www.instagram.com/tgufes/">Instagram　@tgufes</a></h3>
            Instagramプラグイン
          </div>
          <div className="sns-box">
            <h3 className="sub-title"><a href="https://www.tiktok.com/@tgufes">TikTok　@tgufes</a></h3>
            TikTokプラグイン
          </div>
        </div>
      </div>
      <div className="bg-access">
        <div className="access">
          <h2 className="acc-info">アクセス情報</h2>
          <br />
          <div className="acc-detail">
            <ul className="way">五橋キャンパス:　地下鉄南北線五橋駅直結<br />またはJR仙台駅から徒歩10分<br /><br />土樋キャンパス:　地下鉄南北線五橋駅から徒歩5分</ul>
            <iframe src="https://www.google.com/maps/d/embed?mid=1mKLIZZelSfsjVc5-htYi_bN1Zdk63_I&ehbc=2E312F&noprof=1" width={600}height={450}allowFullScreen={true}loading="lazy"referrerPolicy="no-referrer-when-downgrade"className="goo-map"></iframe>
          </div>
        </div>
      </div>

      <Footer/>
    </>

  );
}
