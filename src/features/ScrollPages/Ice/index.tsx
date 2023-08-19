"use client";
import { motion } from "framer-motion";
import TabletImageContainer from "@/components/TabletImgContainer";
import TabletTitle from "@/components/TabletTitle";

type IceProps = {
  rotation: number;
  padding?: number;
};

export const Ice = ({ rotation, padding }: IceProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center z-50 select-none relative">
      <div className="w-full absolute text-center flex justify-center top-4">
        <TabletTitle color="text-[#85d1f5]" text="ICE" />
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-x-10 items-center">
        <motion.div className="justify-self-end"
        animate={{x: padding}}>
          <TabletImageContainer
            rotation={-10}
            animatedRotaion={rotation}
            shadowColor="shadow-blue-400/50"
            imageLink="/pic2.png"
          />
        </motion.div>

        <div className=" text-white text-sm pr-32 font-sans font-semibold whitespace-pre-line">
          Ice
          <br />
          <br />
          the crystalline architect of winter's enchantment
          <br />
          molds the world into a realm of sublime tranquility
          <br />
          <br />
          Delicate and unyielding
          <br />
          it weaves a tapestry of intricate formations
          <br />
          transforming the ordinary into the extraordinary
          <br />
          <br />
          From the fragile lacework that clings to branches like ethereal
          jewelry to the smooth
          <br />
          mirror-like surfaces that reflect the heavens above
          <br />
          ice is a master sculptor
          <br />
          crafting ephemeral wonders with each delicate breath of frost
          <br />
          <br />
          Its touch is both invigorating and chilling
          <br />a paradoxical embrace that numbs the senses while igniting a
          sense of awe.
        </div>
      </div>
    </div>
  );
};
