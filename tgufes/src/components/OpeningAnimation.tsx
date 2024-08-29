// components/OpeningAnimation.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from "next/image";


const OpeningAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // 2秒後にアニメーションを終了

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{delay: 2.5, duration: 1.5}}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          zIndex: 1000,
        }}
      >
        <h1 style={{ margin: 0 }} className='loadingTitle'>Welcome to TGUFES WEBsite</h1>
        <p style={{ margin: 0 }} className='loadingTxt'>NOW LOADING ...</p>
        <Image src="/images/blackTgkun.PNG"alt=''className='blackTGkun'width={448}height={492}/>
      </motion.div>
    )
  );
};

export default OpeningAnimation;
