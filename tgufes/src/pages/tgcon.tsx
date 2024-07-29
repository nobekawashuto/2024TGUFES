import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";
import ScrollRevealContainer from "@/components/ScrollRevealContainer";
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ["latin"] });
interface Person {
    pass: string;
    name: string;
    no: string;
  }

function Avatar({ person }: { person: Person }) {
    return (
        <>
            <div className="personbox">
                <Image
                    className="photo"
                    src={person.pass}
                    width={450}
                    height={600}
                    alt={person.name}
                />
                <p className="txt">No.{person.no}{person.name}</p>
            </div>
        </>
    );
}




export default function Home() {
    //動的インポートを使用し、オプションでSSRさせないよう設定
  const ScrollRevealContainer = dynamic(
    import("@/components/ScrollRevealContainer"),
    { ssr: false, }
  );
    return (
        <>
        <HeaderMenu />
        <div className="TGconBg">
            <div>
                <h1 className="TGconTitle">TGUコンテスト2024</h1>
                <ScrollRevealContainer>
                <div className="themeSec">
                    <h2>Theme：Balloon</h2>
                    <p className="themedeil">風船は軽やかに風に身を任せ、空へと舞い上がります。<br />
                        TGUコンテストという機会を通じて、<br />
                        参加者が「自分の魅力や個性を大きく膨らませ、自信を持ち、重荷を感じずに<br />
                        広い世界へと飛び立って欲しい」という願いが込められています。</p>
                </div>
                </ScrollRevealContainer>
            </div>
            <ScrollRevealContainer>
            <div>
                <div className="personContainer">
                    <Avatar person={{
                        pass: '/images/No.1大藏のどか.jpg',
                        no: '1',
                        name: '大藏のどか'
                    }} />
                    <Avatar person={{
                        pass: '/images/No.２阿部響.jpg',
                        no: '2',
                        name: '阿部響'
                    }} />
                </div>
                <div className="personContainer">
                    <Avatar person={{
                        pass: '/images/No.3片山隆平.jpg',
                        no: '3',
                        name: '片山隆平'
                    }} />
                    <Avatar person={{
                        pass: '/images/No.4藤島太陽.jpg',
                        no: '4',
                        name: '藤島太陽'
                    }} />
                </div>
                <div className="personContainer">
                    <Avatar person={{
                        pass: '/images/No.5鈴木啓行.jpg',
                        no: '5',
                        name: '鈴木啓行'
                    }} />
                    <Avatar person={{
                        pass: '/images/No.6高橋栄心.jpg',
                        no: '6',
                        name: '高橋栄心'
                    }} />
                </div>
                <div className="personContainer">
                    <Avatar person={{
                        pass: '/images/No.7木村向太.jpg',
                        no: '7',
                        name: '木村向太'
                    }} />
                    <Avatar person={{
                        pass: '/images/No.8鈴木総太.jpg',
                        no: '8',
                        name: '鈴木総太'
                    }} />
                </div>

            </div>
            </ScrollRevealContainer>
        </div>
        </>
    )
};
