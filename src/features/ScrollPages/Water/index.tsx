"use client";
import { motion } from "framer-motion";
import TabletImageContainer from "@/components/TabletImgContainer";
import TabletTitle from "@/components/TabletTitle";

type WaterProps = {
  rotation: number;
  padding?: number;
};

export const Water = ({ rotation, padding }: WaterProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center z-50 select-none relative">
      <div className="w-full absolute text-center flex justify-center top-4">
        <TabletTitle color="text-blue-800" text="WATER" />
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-x-10 items-center">
        <motion.div className="justify-self-end" animate={{ x: padding }}>
          <TabletImageContainer
            rotation={0}
            animatedRotaion={rotation}
            shadowColor="shadow-blue-800/50"
            imageLink="/pic4.jpg"
          />
        </motion.div>

        <div className=" text-white text-sm pr-32 font-sans font-semibold whitespace-pre-line">
          Water
          <br /> the fluid poet of Earth's landscapes
          <br /> weaves a serenade of life through its meandering rivers
          <br /> tranquil lakes
          <br /> and crashing waves
          <br />
          <br /> It whispers secrets of ancient journeys
          <br /> etching stories in every ripple and flow
          <br />
          <br /> A universal canvas for reflection
          <br /> water mirrors the world above
          <br /> inviting us to peer into its depths and ponder the mysteries it
          holds
          <br />
          <br /> From its gentle touch to its mighty surges
          <br /> water's dance shapes the contours of our planet and stirs the
          currents of our souls.
        </div>
      </div>
    </div>
  );
};
