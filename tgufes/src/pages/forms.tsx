import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div id="home" className="big-bg">
                <HeaderMenu />
            </div>
            <div className="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScu1xACysLkLIt05JBHu2Cc0-8WekMSaSujyIb60YWT8ZOzWw/viewform?embedded=true" width="1240" height="729" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
            </div>
            <Footer/>
        </>



    )
};
