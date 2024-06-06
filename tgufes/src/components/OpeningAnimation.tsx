// components/OpeningAnimation.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const OpeningAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3秒後にアニメーションを終了

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          zIndex: 1000,
        }}
      >
        <h1>Welcome to TGUFES</h1>
      </motion.div>
    )
  );
};

export default OpeningAnimation;
