import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { color } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <HeaderMenu />

            <div className='Topics'>
                <h4 className='topicpage-date txt'>2024.7.11<br/>あのTVの人気企画｢未成年の主張｣をオマージュした特別イベントBe.Voice開催決定!!</h4>
                <p className='topicpage-txt txt'>この度私たちは、｢Be.Voice｣の参加者を募集しています！<br/>Be.VoiceとはあのTVの人気企画｢未成年の主張｣をオマージュした特別イベントです！<br/>ご応募受付期間は7月8日～7月22日までです！みなさんのご応募お待ちしております！！<br/>
                <Image src="/images/BeVoice.jpg" alt="BeVoiceImage" className="bevoiceImg"width={500}height={500} objectFit="contain" />
                応募は下記のURLから！ <br/><br/><a href="https://docs.google.com/forms/d/1aOYbLnpwI2I34HAk-I0MY6DegT0TfwEBYiIa8YqfEDs/viewform?pli=1&pli=1&edit_requested=true">href=https://docs.google.com/forms/d/1aOYbLnpwI2I34HAk-I0MY6DegT0TfwEBYiIa8YqfEDs/viewform?pli=1&pli=1&edit_requested=true</a></p>
            </div>



            <div className='Topics'>
                <h4 className='topicpage-date txt'>2024.6.21<br/>2024年度東北学院大学祭のホームページver1.0を公開しました</h4>
                <p className='topicpage-txt txt'>今年度のホームページを一般公開しました。今年度は実行委員会内でホームページを作成します。今後の更なるアップデートにご期待ください！</p>
            </div>
            <Footer/>
        </>
    )
};

