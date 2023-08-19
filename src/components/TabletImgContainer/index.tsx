"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

type TabletImageContainerProps = {
  rotation?: number;
  imageLink: string;
  shadowColor: string;
  animatedRotaion?: number;
  imageStyle?: string;
};

const TabletImageContainer: FC<TabletImageContainerProps> = ({
  rotation,
  imageLink,
  shadowColor,
  animatedRotaion,
  imageStyle,
}) => {
  return (
    <motion.div
      className={`w-[450px] h-[230px] relative border-4 border-black rounded-[30px] shadow-2xl ${shadowColor}`}
      initial={{ rotate: rotation }}
      animate={{ rotate: animatedRotaion }}
      transition={{ type: "tween", delay: 0, duration: 0.3 }}
    >
      <div className="absolute right-0 top-0 h-full bg-transparent px-1 rounded-full flex justify-center items-center">
        <div className="bg-black rounded-full h-20 w-4"></div>
      </div>
      <Image
        src={imageLink}
        fill
        alt=" "
        className={`object-cover object-center ${imageStyle} -z-10 rounded-[30px]`}
      />
    </motion.div>
  );
};
export default TabletImageContainer;
