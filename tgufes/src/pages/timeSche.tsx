import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
        <HeaderMenu/>
        <div className="sche-bg">
            <h2 className="sns-title txt">五橋キャンパス祭タイムスケジュール</h2>
            <div className="timeimg">
                <Image src="/images/itutu-time.png"alt=""width={917}height={651}className="timeImg"/>
            </div>
        </div>
        <div className="sche-bg">
            <h2 className="sns-title txt">六軒丁祭タイムスケジュール</h2>
            <div className="timeimg">
                <Image src="/images/tuti-time.png"alt=""width={917}height={651}className="timeImg"/>
            </div>
        </div>
        <Footer/>






        </>
    )
};

