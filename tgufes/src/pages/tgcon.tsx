import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import HeaderMenu from "@/components/headerMenu";
import Footer from "@/components/Footer";
import ScrollRevealContainer from "@/components/ScrollRevealContainer";
import dynamic from 'next/dynamic'
import { FaXTwitter ,FaInstagram} from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });
interface Person {
    pass: string;
    name: string;
    no: string;
    snsig:string
    snsX:string
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
                <div className="">
                    <div className="">
                        <Link href={person.snsig}><FaInstagram /></Link>　
                        <Link href={person.snsX}><FaXTwitter/></Link>
                    </div>
                    <p className="personName txt">No.{person.no}{person.name}</p>
                </div>
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
                            <p className="themedeil">
                                風船は軽やかに風に身を任せ、空へと舞い上がります。<br />
                                TGUコンテストという機会を通じて、<br />
                                参加者が「自分の魅力や個性を大きく膨らませ<br />
                                自信を持ち、重荷を感じずに<br />
                                広い世界へと飛び立って欲しい」<br />
                                という願いが込められています。
                            </p>
                        </div>
                    </ScrollRevealContainer>
                </div>
                <ScrollRevealContainer>
                    <div className="tgcon-date txt">
                        <h2 className="tgcon-date-title">日時・場所</h2>
                        <div className="tgcon-date-deil">
                            <p>10月27日(日)</p>
                            <p className="themedeil">パフォーマンス→土樋キャンパス 90周年記念館3階ホール</p>
                            <p className="themedeil">授賞式→特設ステージ(雨天時：90周年記念館3階ホール)</p>
                        </div>

                    </div>
                </ScrollRevealContainer>
                <ScrollRevealContainer>
                    <div className="txt">
                        <h2 className="tgcon-person-title">出場者</h2>
                        <div className="personContainer">
                            <Avatar person={{
                                pass: '/images/No.1大藏のどか.jpg',
                                no: '1',
                                name: '大藏のどか',
                                snsig:'https://www.instagram.com/24tgu__01?igsh=MXhzOG84c3YzNjFnNQ==',
                                snsX:'https://x.com/24tgu__01?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                            }} />
                            <Avatar person={{
                                pass: '/images/No.２阿部響.jpg',
                                no: '2',
                                name: '阿部響',
                                snsig:'https://www.instagram.com/24tgu__02/?igsh=Mmg4bHEyN2U1bmFt',
                                snsX:'https://x.com/24tgu__02?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                            }} />
                        </div>
                        <div className="personContainer">
                            <Avatar person={{
                                pass: '/images/No.3片山隆平.jpg',
                                no: '3',
                                name: '片山隆平',
                                snsig:'https://www.instagram.com/24tgu__03/?igsh=Mjc0cGp3NGNpYmRy',
                                snsX:'https://x.com/24tgu__03?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                                
                            }} />
                            <Avatar person={{
                                pass: '/images/No.4藤島太陽.jpg',
                                no: '4',
                                name: '藤島太陽',
                                snsig:'https://www.instagram.com/24tgu__04/?igsh=MThoNGViaTBkajNtZw%3D%3D',
                                snsX:'https://x.com/24tgu__04?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                            }} />
                        </div>
                        <div className="personContainer">
                            <Avatar person={{
                                pass: '/images/No.5鈴木啓行.jpg',
                                no: '5',
                                name: '鈴木啓行',
                                snsig:'https://www.instagram.com/24tgu__05/?igsh=MWM0N2dmZzBiNzJrNw%3D%3D',
                                snsX:'https://x.com/24tgu__05?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                            }} />
                            <Avatar person={{
                                pass: '/images/No.6高橋栄心.jpg',
                                no: '6',
                                name: '高橋栄心',
                                snsig:'https://www.instagram.com/24tgu__06/?igsh=MWtwamxrZjBzcHI2ag%3D%3D',
                                snsX:'https://x.com/24tgu__06?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                            }} />
                        </div>
                        <div className="personContainer">
                            <Avatar person={{
                                pass: '/images/No.7木村向太.jpg',
                                no: '7',
                                name: '木村向太',
                                snsig:'https://www.instagram.com/24tgu__07/?igsh=MWF4ZXNiYjA3eWgxaw%3D%3D',
                                snsX:'https://x.com/24tgu__07?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                            }} />
                            <Avatar person={{
                                pass: '/images/No.8鈴木総太.jpg',
                                no: '8',
                                name: '鈴木総太',
                                snsig:'https://www.instagram.com/24tgu__08/?igsh=MXhsY3hvaXZxd29wMg%3D%3D',
                                snsX:'https://x.com/24tgu__08?s=21&t=Vjz3xTRuZlGVQyWvswRACA'
                            }} />
                        </div>

                    </div>
                </ScrollRevealContainer>
            </div>
        <Footer/>
        </>
    )
};
