import { FC, useRef, useEffect, ReactNode } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
    children:ReactNode
    move?: string;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,//何回もアニメーション表示
        delay: 400,
        opacity: 0,
        origin:
          move === "left"
            ? "left"
            : move === "right"
            ? "right"
            : move === "top"
            ? "top"
            : "bottom",
        distance: "40px"//表示された時に要素を40px移動させる
      });
  }, [sectionRef,move]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;

