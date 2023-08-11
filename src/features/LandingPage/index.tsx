"use client";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimation } from "framer-motion";

const LandingPage = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const controls = useAnimation();

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const animateCursor = () => {
    controls.start({
      x: cursorX.get() - 75 ,
      y: cursorY.get() - 200,
      transition: { duration: 0.1 },
    });
    requestAnimationFrame(animateCursor);
  };

  React.useEffect(() => {
    animateCursor();

    return () => {
      controls.stop();
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <Image
        alt=" "
        src="/background.png"
        width={5000}
        height={5000}
        className="object-cover object-center w-full h-full absolute z-10"
      />
      <motion.div
        animate={controls}
        className="text-black flex justify-center items-center text-lg font-semibold h-64 w-64 absolute mix-blend-difference blur-lg bg-white rounded-full z-20"
      ></motion.div>
       <motion.div
        animate={controls}
        className="text-white cursor-pointer flex justify-center items-center text-3xl font-semibold h-64 w-64 absolute rounded-full z-30"
      >Enter</motion.div>
    </div>
  );
};

export default LandingPage;
