import React from "react";
import { ArrowRight } from "react-feather";
import Image from "next/image";
import Rectangle from "../images/rectangle.png";

interface skillProps {
  title: string;
  text: string;
}

const Skills = ({ title, text }: skillProps) => {
  return (
    <div className="relative">
      <div className="my-14 w-[452px] h-[520px]">
        <Image src={Rectangle} alt="rectangle" className=" inline-block" />
      </div>
      <div className="absolute top-[20%] pl-14 max-w-[308px] h-[365px] flex flex-col justify-between">
        <p className="font-[Syne] font-bold text-4xl">{title}</p>

        <div>
          <p className="font-[Poppins] mb-6">{text}</p>
          <p className="uppercase flex items-center gap-2.5 font-[Syne] font-bold text-2xl">
            learn more
            <span>
              <ArrowRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
