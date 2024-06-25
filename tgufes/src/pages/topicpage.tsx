import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <HeaderMenu />
            <div className='Topics'>
                <h4 className='topicpage-date'>2024.6.21<br/>2024年度東北学院大学祭のホームページver1.0を公開しました</h4>
                <p className='topicpage-txt'>今年度のホームページを一般公開しました。今年度は実行委員会内でホームページを作成します。今後の更なるアップデートにご期待ください！</p>
            </div>
            <Footer/>
        </>
    )
};

