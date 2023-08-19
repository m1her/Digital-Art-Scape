"use client";
import { motion } from "framer-motion";
import TabletImageContainer from "@/components/TabletImgContainer";
import TabletTitle from "@/components/TabletTitle";

type NatureProps = {
  rotation: number;
  padding?: number;
};

export const Nature = ({ rotation, padding }: NatureProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center z-50 select-none relative">
      <div className="w-full absolute text-center flex justify-center top-4">
        <TabletTitle color="text-lime-400" text="NATURE" />
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-x-10 items-center">
        <motion.div className="justify-self-end" animate={{ x: padding }}>
          <TabletImageContainer
            rotation={20}
            animatedRotaion={rotation}
            shadowColor="text-lime-400/50"
            imageLink="/pic3.jpg"
          />
        </motion.div>

        <div className=" text-white text-sm pr-32 font-sans font-semibold whitespace-pre-line">
          Nature
          <br />
          is a breathtaking tapestry of life
          <br />
          woven together with intricate threads of flora
          <br />
          fauna
          <br />
          and landscapes that captivate the senses
          <br />
          <br />
          From the towering majesty of ancient forests to the delicate dance of
          wildflowers in a sunlit meadow
          <br />
          nature's beauty is an ever-changing masterpiece
          <br />
          <br /> It whispers secrets in the rustle of leaves
          <br /> paints the sky with hues of sunrise and sunset
          <br /> and orchestrates a symphony of sounds
          <br /> from the melodious songs of birds to the soothing rhythm of
          flowing water
          <br />
          <br /> In its quiet serenity and vibrant chaos
          <br /> nature offers solace
          <br /> inspiration
          <br /> and a profound reminder of the interconnectedness of all living
          things on our wondrous planet.
        </div>
      </div>
    </div>
  );
};
