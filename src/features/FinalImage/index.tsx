"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

export const FinalImage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: {
    currentTarget: any;
    clientX: number;
    clientY: number;
  }) => {
    const image = e.currentTarget;
    const { left, top, width, height } = image.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    setCursorPosition({ x: offsetX, y: offsetY });
  };

  const objectCenterX = (-cursorPosition.x / window.innerWidth) * 100;
  const objectCenterY = (-cursorPosition.y / window.innerHeight) * 40;

  return (
    <div
      className="w-screen h-full mr-10 bg-white flex justify-center shadowWhite z-20"
      onMouseMove={handleMouseMove}
    >
      <div className="bg-white w-32 blur-lg h-full -mr-10 z-50"></div>
      <div className="w-[620px] h-full opacity-10">
        <motion.div className="w-full h-full relative overflow-hidden">
          <motion.img
            className="z-30 object-cover scale-125 absolute w-full h-full top-0 left-0"
            src="/EndingDisplay.jpg"
            alt=" "
            animate={{
              objectPosition: `${objectCenterX + 40}px ${objectCenterY + 20}px`,
            }}
            transition={{duration: 0.5, type: "tween", ease: "easeOut"}}
          />
        </motion.div>
      </div>
      <div className="bg-white w-32 blur-lg h-full -ml-10 z-50"></div>
    </div>
  );
};
