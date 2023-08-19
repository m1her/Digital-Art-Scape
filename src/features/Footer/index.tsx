"use client";
import { motion } from "framer-motion";

type FooterProps = {
    style?: string;
    opacity?: 0 | 0.5 | 1;
}

export const Footer = ({ style, opacity }: FooterProps) => {
  return (
    <motion.div className="flex gap-x-10 font-semibold text-white absolute bottom-0 text-5xl whitespace-nowrap overflow-y-hidden font-press-start"
    animate={{color: style, opacity: opacity}}
    >
      <div style={{wordSpacing: '-20px'}}>ART SCAPE</div>
      <div style={{wordSpacing: '-20px'}}>ART SCAPE</div>
      <div style={{wordSpacing: '-20px'}}>ART SCAPE</div>
      <div style={{wordSpacing: '-20px'}}>ART SCAPE</div>
      <div style={{wordSpacing: '-20px'}}>ART SCAPE</div>
    </motion.div>
  );
};

