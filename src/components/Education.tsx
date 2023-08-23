import React from "react";
import { Icons } from "./icons";

interface EduProps {
  startYear: string;
  endYear: string;
  course: string;
  school: string;
}

const Education = ({ startYear, endYear, course, school }: EduProps) => {
  return (
    <div>
      <div className="w-[349px] h-[312px] border border-black shadow-[10px_10px] p-8 my-12 flex flex-col gap-12">
        <Icons name="journal-fill" />
        <div className="font-[Manrope] font-semibold space-y-2">
          <p className=" text-base">
            {startYear} - {endYear}
          </p>
          <p className=" text-2xl">{course}</p>
          <p>
            at <span className="font-extrabold">{school}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
