"use client";
import { motion } from "framer-motion";
import TabletImageContainer from "@/components/TabletImgContainer";
import TabletTitle from "@/components/TabletTitle";

type EarthProps = {
  rotation: number;
  padding?: number;
};

export const Earth = ({ rotation, padding }: EarthProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center z-50 select-none relative">
      <div className="w-full absolute text-center flex justify-center top-4">
        <TabletTitle color="text-orange-400" text="EARTH" />
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-x-10 items-center">
        <motion.div className="justify-self-end" animate={{ x: padding }}>
          <TabletImageContainer
            rotation={-10}
            animatedRotaion={rotation}
            shadowColor="text-orange-400/50"
            imageLink="/pic5.jpg"
            imageStyle="object-top"
          />
        </motion.div>

        <div className=" text-white text-sm pr-32 font-sans font-semibold whitespace-pre-line">
          Earth
          <br />
          the cradle of existence
          <br /> cradles life's tapestry with its nurturing embrace
          <br />
          <br /> From the sprawling forests that exhale with ancient wisdom to
          the towering mountains that touch the sky
          <br /> it is a realm of boundless wonder
          <br />
          <br /> Its fertile soil births the sustenance of generations
          <br /> while its diverse ecosystems form an intricate mosaic of
          interconnectedness
          <br />
          <br /> Earth's landscapes tell tales of resilience and adaptation
          <br /> inviting us to explore its hidden treasures and cherish the
          delicate balance that sustains us all
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
