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
        <HeaderMenu/>
            <h1 className="coming">Coming Soon.</h1>

        </>
    )
};

