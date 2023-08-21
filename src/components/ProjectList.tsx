import React from "react";
import { Icons } from "./icons";

interface Props {
  title: string;
  category: string;
  year: string;
}

const ProjectList = ({ title, category, year }: Props) => {
  return (
    <div className="flex">
      <div className=" w-[452px] cursor-default relative group">
        <p className="border-b border-[#999] group-hover:border-none pb-4 font-[Syne] font-semibold text-5xl text-[#999] group-hover:text-black transform transition-all translate-y-0 group-hover:-translate-y-2 duration-500">
          {title}
        </p>

        <div className="">
          <p className=" font-[Manrope] font-extrabold text-base text-[#4F4F4F] uppercase my-2 flex justify-between transform transition-all duration-500 -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-b border-[#999]">
            {category}
            <span>{year}</span>
            <span>
              <Icons name="arrow-right-small" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
