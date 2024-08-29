import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";
import Head from "next/head";
import ScrollRevealContainer from "@/components/ScrollRevealContainer";
import dynamic from 'next/dynamic'
import { FaXTwitter} from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa";

import comedyLogo from "../../public/images/comedy-logo-retouka.png"
import itutuTalent from "../../public/images/isikawa.jpg"
import tutigei1 from "../../public/images/sukachan.jpg"
import tutigei2 from "../../public/images/yasasi.jpg"
import itutuDance from "../../public/images/suzunaokada.JPG"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    //動的インポートを使用し、オプションでSSRさせないよう設定
  const ScrollRevealContainer = dynamic(
        import("@/components/ScrollRevealContainer"),
        { ssr: false, }
  );

    return (
        <>
        <HeaderMenu/>
        <div className="comedy-wep">
            <div className="fspace"></div>
            <ScrollRevealContainer>
                <div className="comedy-main-logo">
                    <Image src={comedyLogo}alt=""className="comedy-logo"/>
                </div>
            </ScrollRevealContainer>
            <div className="space"></div>
            <ScrollRevealContainer>
                <div className="comedy-content">
                    <h2 className="itutu-title txt">五橋祭トーク & ダンスショー</h2>
                </div>
            </ScrollRevealContainer>
                <ScrollRevealContainer>
                    <div className="yokonarabi">
                        <div className="itutu-talent">
                            <div className="photo-dre"><Image src={itutuTalent}alt=""className="itutu-talent-photo"/></div>
                        </div>
                        <div className="explanation">
                            <p className="txt talent-name">石山順征</p>
                            <p className="txt isiyama-deil">第36回ジュノン・スーパーボーイコンテスト　グランプリ受賞。<br/>15155人の頂点に輝く<br/>小学校２年生から高校卒業までサッカー中心の生活を送る。小学5年生の時にスペインレアル・マドリードでの練習に参加。<br/>高校最後の選手権で宮城県大会準優勝メンバー。<br/>大学進学と同時に上京。俳優を目指す。<br/>2024年7月期ドラマ　テレビ朝日　金曜ナイトドラマ「伝説の頭(ヘッド) 翔」　小見田 信造  役</p>
                            {/* <p className="txt comedy-deil">10月14日(月・祝)14:15 ~ 15:30</p>
                            <p className="txt comedy-deil">五橋キャンパス押川記念ホール</p> */}
                        </div>
                    </div>
                </ScrollRevealContainer>
                <ScrollRevealContainer>
                    <div className="yokonarabi">
                        <div className="itutu-talent">
                            <div className="photo-dre"><Image src={itutuDance}alt=""className="itutu-dance-photo"/></div>
                        </div>
                        <div className="explanation">
                            <p className="txt talent-name">suzunaokada</p>
                            <p className="txt isiyama-deil">Singer Song Dancer｜歌 × 踊🇯🇵<br/>【2001年 12月 26日　生まれ｜東京都江戸川区　出身】<br/>ハスキーボイスを強みとし、&quot;歌 × 踊&quot;のコラボレーションを夢見る新生アーティスト。<br/>身体の柔軟性やグルーヴのある動きが特徴的なコンテンポラリーダンサー謙シンガー。<br/>ファッションや表情からは独特な雰囲気を感じさせる、不思議な世界観の持ち主。<br/>■ プロフィール<br/>ダンス歴は16年。コンテンポラリーを主ジャンルとし、2024年から本格的に歌の発信をはじめる。<br/>ダンス×歌を掛け合わせた唯一無二の色を持つアーティストとして現在活動中。<br/>■ 経歴<br/>・Anly 『Alive official video』MV出演<br/>・WORLD OF DANCE 2023   best4<br/>・岡本カウアン 大阪ツアー バックダンサー<br/>・NOA &quot;NO.A&quot; TOUR SPECIAL LIVE IN ARIAKE <br/>ARENA バックダンサー</p>
                            {/* <p className="txt comedy-deil">10月14日(月・祝)14:15 ~ 15:30</p>
                            <p className="txt comedy-deil">五橋キャンパス押川記念ホール</p> */}
                        </div>
                    </div>
                </ScrollRevealContainer>
                <ScrollRevealContainer>
                    <div className="itutu-date">
                        <p className="txt comedy-deil">10月14日(月・祝)14:15 ~ 15:30</p>
                        <p className="txt comedy-deil">五橋キャンパス押川記念ホール</p>
                    </div>
                    <div className="attention">
                        <h2 className="attention-titile txt">注意事項</h2>
                        <div>
                            <p className="attention-deil txt">・本番中は、カメラ、携帯電話などによる撮影は一切禁止となっております。<br/>・係員の指示に従って頂けない場合、公演の中断、もしくは中止をする場合があります。<br/>・駐車場がないため、公共交通機関にてお越しください。</p>
                        </div>
                    </div>
                </ScrollRevealContainer>
            <div className="space"></div>
            <ScrollRevealContainer>
                <div className="comedy-content">
                    <h2 className="itutu-title txt">六軒丁祭お笑いライブ</h2>
                </div>
                <div className="yokonarabi">
                    <div className="tutigei1">
                        <div className="photo-dre"><Image src={tutigei1}alt=""className="tutigei"/></div>
                        <p className="gei-name txt">スカチャン</p>
                    </div>
                    <div className="tutigei2">
                        <div className="photo-dre"><Image src={tutigei2}alt=""className="tutigei"/></div>
                        <p className="gei-name txt">やさしいズ</p>
                    </div>
                </div>
                <div className="explanation">
                    <p className="txt comedy-deil">10月27日(日)13:00 ~ 13:45</p>
                    <p className="txt comedy-deil">特設ステージ(雨天時は8号館5階押川記念ホール)</p>
                </div>
                <div className="attention">
                    <h2 className="attention-titile txt">注意事項</h2>
                    <div>
                        <p className="attention-deil txt">・本番中は、カメラ、携帯電話などによる撮影は一切禁止となっております。<br/>・係員の指示に従って頂けない場合、公演の中断、もしくは中止をする場合があります。<br/>・駐車場がないため、公共交通機関にてお越しください。</p>
                    </div>
                </div>
            </ScrollRevealContainer>
            <div className="space"></div>



        </div>
        
        
        
        </>
    )
};
