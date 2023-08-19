import { FC } from "react";

type TabletTitleProps = {
  color: string,
  text: string,
}

const TabletTitle: FC<TabletTitleProps> = ({ color, text }) => {
  return (
    <div
      className={`text-9xl ${color} font-black font-sans`}
    >
      {text}
    </div>
  );
};
export default TabletTitle;
