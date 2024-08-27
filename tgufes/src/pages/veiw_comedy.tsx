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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
        <HeaderMenu/>
        <div className="comedy-wep">
            <div className="comedy-main-logo">
                <Image src={comedyLogo}alt=""className="comedy-logo"/>
            </div>
        </div>
        
        </>
    )
};
