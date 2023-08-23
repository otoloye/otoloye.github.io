import React from "react";
import { Icons } from "./icons";

interface IProps {
  icon: string;
  title: string;
  text: string;
}

const Interests = ({ title, text, icon }: IProps) => {
  return (
    <div className="my-14">
      <div className="h-[460px] md:w-[448px] w-[90%] border border-black shadow-[10px_10px] p-8 flex flex-col gap-12">
        <Icons name={icon} />
        <p className="font-[Syne] font-bold text-3xl">{title}</p>
        <p className="font-[Manrope] font-semibold text-base max-w-[347px]">
          {text}
        </p>
        <p className="flex items-center gap-2 font-[Syne] font-bold text-2xl relative after:absolute after:w-[194px] after:bg-black after:h-[2px] after:bottom-0 after:left-0 navlink">
          See Projects{" "}
          <span>
            <Icons name="arrow-right" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Interests;
