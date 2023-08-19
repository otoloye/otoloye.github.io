import React, { useState } from "react";
import { Icons } from "./icons";

interface Props {
  title: string;
  category: string;
  year: string;
}

const ProjectList = ({ title, category, year }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="flex">
      <div className="border-b border-[#999] w-[452px]">
        <p className="font-[Syne] font-semibold text-5xl mb-4 text-[#999]">
          {title}
        </p>

        <p className=" font-[Manrope] font-extrabold text-base text-[#4F4F4F] uppercase my-2 flex justify-between ">
          {category}
          <span>{year}</span>
          <span>
            <Icons name="arrow-right-small" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProjectList;
