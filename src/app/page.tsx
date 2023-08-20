"use client";
import LandingPage from "@/features/LandingPage";
import MainBg from "@/features/MainBg";
import Loading from "@/features/loading";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainContent from "@/features/MainContent";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [switchBg, setSwitchBg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <motion.div className="fixed top-0 left-0 w-full h-screen select-none">
      {isLoading && <Loading />}
      <MainBg />
      <LandingPage change={setSwitchBg} />
      <div className="z-50 w-full h-full min-h-screen">
        <AnimatePresence>{switchBg && <MainContent />}</AnimatePresence>
      </div>
    </motion.div>
  );
}
