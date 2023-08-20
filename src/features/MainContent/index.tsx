"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Fire } from "../ScrollPages/Fire";
import { Ice } from "../ScrollPages/Ice";
import { Nature } from "../ScrollPages/Nature";
import { Water } from "../ScrollPages/Water";
import { Earth } from "../ScrollPages/Earth";
import { FinalImage } from "../FinalImage";
import { Break } from "../Break";
import { Footer } from "../Footer";

const MainContent = () => {
  const [scrollX, setScrollX] = useState(80);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: -scrollX });
  }, [controls, scrollX]);

  const handleScroll = (e: { deltaY: any }) => {
    const delta = e.deltaY;
    const scrollAmount = window.innerWidth * 0.1;

    if (delta > 0) {
      // Scrolling to the right
      setScrollX((prev) =>
        Math.min(prev + scrollAmount, (items.length - 1) * window.innerWidth)
      );
    } else {
      // Scrolling to the left
      setScrollX((prev) => Math.max(prev - scrollAmount, 0));
    }
  };

  const items = [
    <Fire rotation={scrollX / 25 + 10} padding={-scrollX / 7} />,
    <Ice rotation={scrollX / 50 - 10} padding={-scrollX / 7 + 150} />,
    <Nature rotation={-scrollX / 75 + 30} padding={-scrollX / 7 + 350} />,
    <Water rotation={scrollX / 50 - 60} padding={-scrollX / 7 + 550} />,
    <Earth rotation={scrollX / 40 - 130} padding={-scrollX / 7 + 750} />,
    <Break opacity={Math.floor(scrollX / 100 - 63)} />,
    <FinalImage />,
  ];

  return (
    <motion.div
      className="overflow-x-hidden h-full min-h-screen"
      onWheel={handleScroll}
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.7,
        type: "tween",
        ease: [0.17, 0.17, 0.17, 1],
      }}
    >
      <div className="fixed top-4 right-4 h-1.5 border border-white w-40 rounded-full flex items-center z-50">
        <motion.div
          className="bg-white w-full h-1.5"
          style={{
            scaleX: 1,
            transformOrigin: "0% 50%",
          }}
          animate={{
            scaleX: scrollX / ((items.length - 1) * window.innerWidth),
          }}
          transition={{ type: "tween", ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="flex h-full w-[660vw] z-40"
        //style={{ width: `${items.length * 100}vw` }}
        animate={controls}
        transition={{
          type: "tween",
          ease: "easeOut",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`z-20 ${
              index == 6
                ? "bg-white w-[120vw] flex-shrink-0 justify-end flex"
                : "flex-shrink-0"
            } `}
          >
            {item}
          </div>
        ))}
      </motion.div>
      <motion.div animate={{ x: -scrollX / 30 }} transition={{ type: "tween" }}>
        <Footer
          style={
            scrollX < (window.innerWidth * 6.6 * 1) / 15
              ? "#ff3a3a"
              : scrollX < (window.innerWidth * 6.6 * 2) / 9
              ? "#85d1f5"
              : scrollX < (window.innerWidth * 6.6 * 3) / 8
              ? "#A3E635"
              : scrollX < (window.innerWidth * 6.6 * 4) / 7.5
              ? "#1e40af"
              : scrollX < (window.innerWidth * 6.6 * 5) / 7.1
              ? "#FB923C"
              : "#ffff"
          }
          opacity={
            scrollX < (window.innerWidth * 6.6 * 5) / 6.6
              ? 1
              : scrollX < (window.innerWidth * 6.6 * 5) / 6.3
              ? 0.5
              : 0
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default MainContent;
