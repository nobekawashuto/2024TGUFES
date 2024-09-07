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
import itutuDance from "../../public/images/suzunaokada.jpg"

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
                    <h2 className="itutu-title txt">五橋祭アーティストライブ & トークショー</h2>
                </div>
                {/* <div className="itutu-date">
                        <p className="txt comedy-deil">10月14日(月・祝)14:15 ~ 14:30</p>
                        <p className="txt comedy-deil">五橋キャンパス押川記念ホール</p>
                </div> */}
            </ScrollRevealContainer>
                <ScrollRevealContainer>
                    <div className="yokonarabi">
                        <div className="itutu-talent">
                            <div className="photo-dre"><Image src={itutuTalent}alt=""className="itutu-talent-photo"/></div>
                        </div>
                        <div className="explanation">
                            <p className="talent-name">石山順征</p>
                            <p className="txt isiyama-deil">第36回ジュノン・スーパーボーイコンテスト　グランプリ受賞。<br/>15155人の頂点に輝く<br/>小学校２年生から高校卒業までサッカー中心の生活を送る。小学5年生の時にスペインレアル・マドリードでの練習に参加。<br/>高校最後の選手権で宮城県大会準優勝メンバー。<br/>大学進学と同時に上京。俳優を目指す。<br/>2024年7月期ドラマ　テレビ朝日　金曜ナイトドラマ「伝説の頭(ヘッド) 翔」　小見田 信造  役</p>
                            <p className="txt comedy-deil">10月14日(月・祝)14:15 ~ 14:30</p>
                            <p className="txt comedy-deil">五橋キャンパス押川記念ホール</p>
                        </div>
                    </div>
                </ScrollRevealContainer>
                <ScrollRevealContainer>
                    <div className="yokonarabi">
                        <div className="itutu-talent">
                            <div className="photo-dre"><Image src={itutuDance}alt=""className="itutu-dance-photo"/></div>
                        </div>
                        <div className="explanation">
                            <p className="talent-name">suzunaokada</p>
                            <p className="txt isiyama-deil">Singer Song Dancer｜歌 × 踊🇯🇵<br/>【2001年 12月 26日　生まれ｜東京都江戸川区　出身】<br/>ハスキーボイスを強みとし、&quot;歌 × 踊&quot;のコラボレーションを夢見る新生アーティスト。<br/>身体の柔軟性やグルーヴのある動きが特徴的なコンテンポラリーダンサー謙シンガー。<br/>ファッションや表情からは独特な雰囲気を感じさせる、不思議な世界観の持ち主。<br/>■ プロフィール<br/>ダンス歴は16年。コンテンポラリーを主ジャンルとし、2024年から本格的に歌の発信をはじめる。<br/>ダンス×歌を掛け合わせた唯一無二の色を持つアーティストとして現在活動中。<br/>■ 経歴<br/>・Anly 『Alive official video』MV出演<br/>・WORLD OF DANCE 2023   best4<br/>・岡本カウアン 大阪ツアー バックダンサー<br/>・NOA &quot;NO.A&quot; TOUR SPECIAL LIVE IN ARIAKE <br/>ARENA バックダンサー</p>
                            <p className="txt comedy-deil">10月14日(月・祝)14:30 ~ 15:30</p>
                            <p className="txt comedy-deil">五橋キャンパス押川記念ホール</p>
                        </div>
                    </div>
                </ScrollRevealContainer>
                <ScrollRevealContainer>
                    {/* <div className="itutu-date">
                        <p className="txt comedy-deil">10月14日(月・祝)14:15 ~ 15:30</p>
                        <p className="txt comedy-deil">五橋キャンパス押川記念ホール</p>
                    </div> */}
                    <div className="attention">
                        <h2 className="attention-titile txt">注意事項</h2>
                        <div>
                            <p className="attention-deil txt">どなた様も必ずご一読くださいます様、お願い申し上げます。<br/><br/>
                                ・本企画は予約なし、整理券配布なしの先着順・自由席となっております。<br/>
                                ・先着順となっているため、空席がない場合もございます。あらかじめご了承ください。<br/>
                                ・荷物を置いての座席の確保はご遠慮ください。<br/>
                                ・駐車場がないため、公共交通機関にてお越しください。<br/>
                                ・五橋トーク&ダンスショー、お笑いライブの参加につきまして、早朝からの順番待ちは固くお断りさせていただきます。<br/><br/>
                                以下の事項に該当する行為を見つけた場合は口頭で注意し、改善が見られない場合は退場していただく場合がございます。<br/>
                                ・開演中のスマートフォンやカメラ等の録画・録音機能が備わった機器の使用。<br/>
                                ・会場内での大声での会話、来場者同士の接触。<br/>
                                ・その他、実行委員会が迷惑行為と判断したもの。<br/>
                                また、体調の優れない方(発熱、咳、倦怠感、味覚嗅覚障害、鼻水、くしゃみ等)のご入場はご遠慮いただく場合がございます。<br/><br/>
                                来場者の皆様が楽しめるよう、ご協力をお願いいたします。</p>
                        </div>
                    </div>
                </ScrollRevealContainer>
            <div className="space"></div>
            <ScrollRevealContainer>
                <div className="comedy-content">
                    <h2 className="itutu-title txt">六軒丁祭お笑いライブ</h2>
                </div>
                <div className="explanation">
                    <p className="txt comedy-deil">10月27日(日)13:00 ~ 13:45</p>
                    <p className="txt comedy-deil">特設ステージ(雨天時は8号館5階ホール)</p>
                </div>
                <div className="yokonarabi">
                    <div className="tutigei1">
                        <div className="photo-dre"><Image src={tutigei1}alt=""className="tutigei"/></div>
                        <p className="gei-name">スカチャン</p>
                        <div className="explanation">
                            <p className="txt isiyama-deil">・2014年 スカパー!看板芸人ネタバトルオーディション優勝<br/>
                            ・2020年 CX「第3回ザ・細かすぎて伝わらないモノマネ」準優勝<br/>
                            ・2022年 HBC「知らなくて委員会」知らなくて-1グランプリ優勝<br/>
                            ・2023年 CX「ザ・細かすぎて伝わらないモノマネ2023夏」第5位<br/>
                            ・2023年 シャープPR-1グランプリ東京大会優勝</p>
                        </div>
                    </div>
                    <div className="tutigei2">
                        <div className="photo-dre"><Image src={tutigei2}alt=""className="tutigei"/></div>
                        <p className="gei-name">やさしいズ</p>
                        <div className="explanation">
                            <p className="txt isiyama-deil">・『キングオブコント』決勝進出（2018年）<br/>準決勝進出(2014～2017年、2019年、2021年2022年)<br/><br/>
                            ・『マイナビラフターナイト』第4回チャンピオン大会優勝(2018年)<br/>
                            ・『そろそろにちようチャップリン』お笑い王決定戦2018優勝</p>
                        </div>
                    </div>
                </div>
                {/* <div className="explanation">
                    <p className="txt comedy-deil">10月27日(日)13:00 ~ 13:45</p>
                    <p className="txt comedy-deil">特設ステージ(雨天時は8号館5階押川記念ホール)</p>
                </div> */}
                <div className="attention">
                    <h2 className="attention-titile txt">注意事項</h2>
                    <div>
                    <p className="attention-deil txt">どなた様も必ずご一読くださいます様、お願い申し上げます。<br/><br/>
                                    ・本企画は予約なし、整理券配布なしの先着順・自由席となっております。<br/>
                                    ・先着順となっているため、空席がない場合もございます。あらかじめご了承ください。<br/>
                                    ・駐車場がないため、公共交通機関にてお越しください。<br/>
                                    ・荷物を置いての座席の確保はご遠慮ください。<br/>
                                    ・五橋トーク&ダンスショー、お笑いライブの参加につきまして、早朝からの順番待ちは固くお断りさせていただきます。<br/><br/>
                                    以下の事項に該当する行為を見つけた場合は口頭で注意し、改善が見られない場合は退場していただく場合がございます。<br/>
                                    ・開演中のスマートフォンやカメラ等の録画・録音機能が備わった機器の使用。<br/>
                                    ・会場内での大声での会話、来場者同士の接触。<br/>
                                    ・その他、実行委員会が迷惑行為と判断したもの。<br/>
                                    また、体調の優れない方(発熱、咳、倦怠感、味覚嗅覚障害、鼻水、くしゃみ等)のご入場はご遠慮いただく場合がございます。<br/><br/>
                                    来場者の皆様が楽しめるよう、ご協力をお願いいたします。</p>
                    </div>
                </div>
            </ScrollRevealContainer>
            <div className="space"></div>
            <Footer/>


        </div>
        
        
        
        </>
    )
};
