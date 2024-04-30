import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let test = 'hello world'
  return (
    <>
    <header className="page-header wrapper">
      <h2><a href="index.html">東北学院大学祭公式WEBサイト</a></h2>
      <nav>
        <ul className="main-nav">
          <li><a href="test1.html">芸能人企画</a></li>
          <li><a href="test2.html">スケジュール・マップ</a></li>
          <li><a href="test3.html">協賛企業様一覧</a></li>
          <li><a href="contact.html">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
    <div className="home-content wrapper">
      <h1 className="page-title">#TGUFES</h1>
      <p>10月14日(月・祝)10:00〜:五橋祭 五橋キャンパス<br/>10月26日(土)10:00〜:六軒丁祭 土樋キャンパス</p>
      <a className="button" href="test2.html">大学祭についてはこちら！</a><br/><br/>
      <p>大学祭開催まで残り<span id="day"></span>日</p>
    
    </div>
    <div className="sns">
    <h2 className="sns-title">SNS</h2>
    <br/>
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
    <br/>
    <div className="detail">
    <ul className="way">五橋キャンパス:　地下鉄南北線五橋駅直結<br/>　　　　　　　　またはJR仙台駅から徒歩10分<br/><br/>土樋キャンパス:　地下鉄南北線五橋駅から徒歩5分</ul>
    <iframe src="https://www.google.com/maps/d/embed?mid=1mKLIZZelSfsjVc5-htYi_bN1Zdk63_I&ehbc=2E312F" width="850" height="480"></iframe>
    </div>
    </div>
    </div>
    <div className="backtop">
      <h4><a href="index.html">トップに戻る</a></h4>
    </div>
    <footer>
      <div className="wrapper">
        <p><small>&copy;2024年度東北学院大学祭実行委員会HP制作班</small></p>
      </div>
    </footer>
    </>

  );
}
