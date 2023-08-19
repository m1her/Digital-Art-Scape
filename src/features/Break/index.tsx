"use client";
import { motion } from "framer-motion";

type breakProps = {
  opacity: number;
};
export const Break = ({ opacity }: breakProps) => {
  return (
    <motion.div
      className="h-full w-[60vw] bg-gradient-to-r from-transparent to-white"
      initial={{opacity: 0}}
        animate={{opacity: opacity}}
    ></motion.div>
  );
};
