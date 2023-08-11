"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MainBg = () => {
  return (
    <motion.div
      className=" w-full h-full fixed bg-black -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}
    >
      <Image
        alt=" "
        src="/bg.png"
        width={5000}
        height={5000}
        className="object-cover object-center w-full h-full absolute z-10"
      />
    </motion.div>
  );
};
export default MainBg;
