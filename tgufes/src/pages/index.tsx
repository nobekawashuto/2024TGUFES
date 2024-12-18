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
import { FaXTwitter} from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa";


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
        <meta name="description" content="東北学院大学祭実行委員会が運営するホームページです!今年度は10月14日(月・祝)：五橋キャンパス祭、10月26(土),27日(日)：土樋キャンパス祭を開催します！今年度のホームページは委員会内で作成しています！ご覧ください！" />
      </Head>
      <HeaderMenu />

      <ImageSlider />
      <div className="bg-image">
        <ScrollRevealContainer>
          <Schedule />
        </ScrollRevealContainer>

        <ScrollRevealContainer>
          <Topics />
        </ScrollRevealContainer>


        <ScrollRevealContainer>
          <div className="sns">
            <h2 className="sns-title">Event</h2>
            <div className="sns-bg">
              <div className="card card-skin txt">
                <Link href="/tgcon">
                  <div className="card__imgframe1"></div>
                    <div className="card__textbox">
                      <div className="card__titletext">
                        TGU Contest page Out Now !
                      </div>
                      <div className="card__overviewtext">
                        TGUコンテスト特設ページです！
                      </div>
                    </div>
                </Link>
              </div>
              <div className="card card-skin txt">
                <Link href="/view_comedy">
                  <div className="card__imgframe5"></div>
                    <div className="card__textbox">
                      <div className="card__titletext">
                        Guest page Out Now !
                      </div>
                      <div className="card__overviewtext">
                        2024年度芸能人企画ページです！
                      </div>
                    </div>
                </Link>
              </div>
              <div className="card card-skin txt">
                <Link href="https://drive.google.com/file/d/1MLt907lZgvjlVJGmpUGlEbfjzDEMrZQt/view?usp=sharing">
                  <div className="card__imgframe6"></div>
                    <div className="card__textbox">
                      <div className="card__titletext">
                        Digital Pamphlet Out Now !
                      </div>
                      <div className="card__overviewtext">
                        2024年度デジタルパンフレットです！<br/>※GoogleDriveに遷移します
                      </div>
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </ScrollRevealContainer>

        <ScrollRevealContainer>
          <div className="sns">
            <h2 className="sns-title">SNS</h2>
            <br />
            <div className="sns-bg">
              <div className="card card-skin txt">
                  <Link href="https://twitter.com/TGUFES">
                    <div className="card__imgframe2"></div>
                      <div className="card__textbox">
                        <div className="card__titletext">
                        <FaXTwitter style={{fontSize: '20px' }}/>
                        </div>
                        {/* <div className="card__overviewtext">
                          TGUコンテスト特設ページです！
                        </div> */}
                      </div>
                  </Link>
                </div>
                <div className="card card-skin txt">
                  <Link href="https://www.instagram.com/tgufes/">
                    <div className="card__imgframe3"></div>
                      <div className="card__textbox">
                        <div className="card__titletext">
                          Official Instagram
                        </div>
                        {/* <div className="card__overviewtext">
                          TGUコンテスト特設ページです！
                        </div> */}
                      </div>
                  </Link>
                </div>
                <div className="card card-skin txt">
                  <Link href="https://www.instagram.com/_tgucontest?igsh=MXBicTE3d3NndDg4NA==">
                    <div className="card__imgframe4"></div>
                      <div className="card__textbox">
                        <div className="card__titletext">
                          <FaInstagram style={{ color: '#CF2E92',fontSize: '30px' }}/> TGU contest Instagram
                        </div>
                        {/* <div className="card__overviewtext">
                          TGUコンテスト特設ページです！
                        </div> */}
                      </div>
                  </Link>
                </div>
              </div>
                {/* <div className="snswrapper">
                  <div className="snscard">
                      <h2 className="snscard-title">カードタイトル</h2>
                      <a href="#" className="snscard-link">詳細はこちら</a>
                  </div>
                  <div className="snscard">
                      <h2 className="snscard-title">カードタイトル</h2>
                      <a href="#" className="snscard-link">詳細はこちら</a>
                  </div>
                </div> */}
                
            {/* <div className="sns-bg">
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
            </div> */}
            
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
