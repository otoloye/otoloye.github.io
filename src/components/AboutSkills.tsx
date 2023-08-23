import React from "react";
import Image from "next/image";
import Rectangle from "../images/rectangle2.png";
import { ArrowRight } from "react-feather";

interface skillProps {
  title: string;
  text?: string;
}

const AboutSkills = ({ title, text }: skillProps) => {
  return (
    <div className="relative">
      <div className="my-14 lg:w-[1146px] lg:h-[265px]">
        <Image src={Rectangle} alt="rectangle" className=" inline-block" />
      </div>
      <div className="absolute top-[40%] pl-14 h-[365px] w-[90%] flex justify-between">
        <p className="font-[Syne] font-bold text-4xl max-w-[308px]">{title}</p>

        <p className="font-[Syne] font-bold text-5xl cursor-pointer">+</p>
      </div>
    </div>
  );
};

export default AboutSkills;
