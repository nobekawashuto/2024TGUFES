import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderMenu from "@/components/headerMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <div className="slider">
        <div className="image"><HeaderMenu /></div>
        <div className="image"><HeaderMenu /></div>
        <div className="image"><HeaderMenu /></div>
      </div>


    </>

  );
}
