import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>

            <HeaderMenu />
            <ImageSlider/>
            <div className="form">
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScu1xACysLkLIt05JBHu2Cc0-8WekMSaSujyIb60YWT8ZOzWw/viewform?embedded=true" className="goo-form" width={1240} height={900} >読み込んでいます…</iframe> */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjF323wIrtSpGqskZvbwpKUcJ3awSWDold6NuQThxHRTkaOw/viewform?embedded=true" className="goo-form" width={600} height={1200} >読み込んでいます…</iframe>
            </div>
            <Footer />
        </>



    )
};
