"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-full w-full fixed z-40 flex justify-center items-center top-0 left-0 select-none">
      <motion.div
        className="w-full h-full z-40 bg-black absolute flex justify-center items-center"
        animate={{ scale: [1, 0.9, 0.8], opacity: [1, 1, 1, 0] }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
       
      </motion.div>
      <motion.div className="absolute z-50"
      animate={{ opacity: [1, 1, 1, 0] }}
      transition={{ delay: 2.5, duration: 1.5 }}
      >
          <div className="text-9xl font-semibold text-white tracking-widest">
            ART
          </div>
          <div className="overflow-hidden -mt-4 w-[285px] ">
            <div className="text-sm font-light text-white tracking-[60px] text-center">
              SCAPE
            </div>
          </div>
          <div className="w-full h-2 border border-white -ml-4 mt-2 overflow-hidden p-[1px]">
          <motion.div
        className="w-[330px] h-full bg-white"
        initial={{ x: -340, scale: 1 }}
        animate={{ x: [-340, 0, 340] }}
        transition={{ duration: 2.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        style={{ willChange: 'transform' }} // Enable hardware acceleration
      ></motion.div>
          </div>
        </motion.div>
    </div>
  );
};
export default Loading;
