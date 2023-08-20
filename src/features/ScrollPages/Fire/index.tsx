'use client';
import { motion } from "framer-motion";
import TabletImageContainer from "@/components/TabletImgContainer";
import TabletTitle from "@/components/TabletTitle";


type FireProps = {
  rotation: number;
  padding?: number;
};

export const Fire = ({ rotation, padding }: FireProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center z-50 select-none relative">
      <div className="w-full absolute text-center flex justify-center top-4">
        <TabletTitle color="text-[#ff3a3a]" text="FIRE" />
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-x-10 items-center">
        <motion.div className="justify-self-end"
        animate={{x: padding}}
        >
          <TabletImageContainer
            rotation={-10}
            animatedRotaion={-rotation}
            shadowColor="shadow-red-400/50"
            imageLink="/pic1.jpg"
          />
        </motion.div>

        <div className=" text-white text-sm pr-32 font-sans font-semibold whitespace-pre-line">
          Fire
          <br />
          <br />
          the untamed dancer of the elements
          <br />
          casts its hypnotic spell upon all who dare to gaze into its fiery
          depths
          <br />
          <br />
          With an insatiable hunger
          <br />
          it devours the barriers of darkness
          <br />
          leaving behind a trail of mesmerizing embers that flicker and dance
          like celestial
          <br />
          <br />
          Its hues paint the canvas of night
          <br />
          from the passionate reds that whisper of ancient desires
          <br />
          to the vibrant oranges that crackle with untamed energy
          <br />
          and the regal blues that hint at hidden mysteries
          <br />
        </div>
      </div>
    </div>
  );
};
