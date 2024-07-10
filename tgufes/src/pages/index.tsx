import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import Schedule from "@/components/schedule";
import Head from "next/head";
import ScrollRevealContainer from "@/components/ScrollRevealContainer";
import dynamic from 'next/dynamic'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import InstagramEmbed from '@/components/Instagram';
import Topics from "@/components/Topics";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  let test = 'hello world'
  //動的インポートを使用し、オプションでSSRさせないよう設定
  const ScrollRevealContainer = dynamic(
    import("@/components/ScrollRevealContainer"),
    { ssr: false, }
  );

  const postUrl1 = 'https://www.instagram.com/p/C9CgW9ZBWnu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  const postUrl2 = 'https://www.instagram.com/p/C8MZxfEhHZB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  return (
    <>
      <Head>
        <title>2024年度東北学院大学祭|TGUFES2024</title>
        <meta name="description" content="東北学院大学祭実行委員会が運営するホームページです" />

      </Head>
      <HeaderMenu />

      <ImageSlider />
      <div className="bg-image">
        <ScrollRevealContainer>
          <Schedule />
        </ScrollRevealContainer>

        <ScrollRevealContainer>
          <Topics/>
        </ScrollRevealContainer>

        <ScrollRevealContainer>
          <div className="sns">
            <h2 className="sns-title">SNS</h2>
            <br />
            <div className="sns-bg">
              <div className="sns-box">
                <h3 className="sub-title txt"><a href="https://twitter.com/TGUFES">X　@TGUFES</a></h3>

                <TwitterTimelineEmbed sourceType="profile" screenName="TGUFES" options={{ height: 650, borderColor: '#ddd', chrome: 'noheader, nofooter' }} />

              </div>
              <div className="sns-box">
                <h3 className="sub-title txt"><a href="https://www.instagram.com/tgufes/">Instagram　@tgufes</a></h3>
                <InstagramEmbed url={postUrl1} />
              </div>
              <div className="sns-box">
                <h3 className="sub-title txt"><a href="https://www.instagram.com/_tgucontest?igsh=MXBicTE3d3NndDg4NA==">TGUコンテストIg　@_tgucontest</a></h3>
                <InstagramEmbed url={postUrl2} />
              </div>
            </div>
          </div>
        </ScrollRevealContainer>

        <ScrollRevealContainer>
          <div className="bg-access">
            <div className="access">
              <h2 className="acc-info">アクセス情報</h2>
              <br />
              <div className="acc-detail">
                <ul className="way txt">五橋キャンパス:　地下鉄南北線五橋駅直結<br />またはJR仙台駅から徒歩10分<br /><br />土樋キャンパス:　地下鉄南北線五橋駅から徒歩5分</ul>
                <iframe src="https://www.google.com/maps/d/embed?mid=1mKLIZZelSfsjVc5-htYi_bN1Zdk63_I&ehbc=2E312F&noprof=1" width={600} height={450} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="goo-map"></iframe>
              </div>
            </div>
          </div>
        </ScrollRevealContainer>
      </div>

      <Footer />
    </>

  );
}
