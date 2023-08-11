"use client";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Logo from "./Logo";

const LandingPage = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const controls = useAnimation();

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const animateCursor = () => {
    controls.start({
      x: cursorX.get() - 75,
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
        src="/back3.jpg"
        width={5000}
        height={5000}
        className="object-cover object-top w-full h-full absolute z-10"
      />
      <motion.div
        animate={controls}
        className="h-64 w-64 absolute mix-blend-difference blur-lg bg-white rounded-full z-20"
      ></motion.div>
      <motion.div
        animate={controls}
        className="text-white cursor-pointer flex justify-center items-center text-3xl font-semibold h-64 w-64 absolute rounded-full z-30"
      >
        Enter
      </motion.div>
      <motion.div
        className="fixed flex gap-36 w-full text-white text-7xl font-extrabold z-10 whitespace-nowrap"
        animate={{
          x: (typeof window !== "undefined" ? -window.innerWidth : 0) + 35,
        }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {[...Array(30)].map((_, index) => (
          <Logo key={index} />
        ))}
      </motion.div>
      <div className="fixed bottom-0 left-0 flex justify-start font-medium z-10 text-xs">
        <div className="max-w-xs p-6 text-red-400">
          <h1 className=" mb-4  font-semibold ">
            Welcome to Digital Art Scape
          </h1>
          <p className="">
            Embark on a mesmerizing journey through the boundless realms of
            creativity at Digital Art Scape. Immerse yourself in a tapestry of
            vibrant colors, intricate designs, and imaginative visions that push
            the boundaries of the digital canvas. Discover a curated collection
            of digital artworks that evoke emotions, spark inspiration, and
            invite you to explore the endless possibilities of digital art. Join
            us in celebrating the fusion of technology and creativity, where
            pixels become poetry and every stroke tells a story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
