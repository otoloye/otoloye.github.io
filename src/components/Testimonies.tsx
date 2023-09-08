import React from "react";

interface IProps {
  name: string;
  title: string;
  text: string;
}

const Testimonies = ({ name, title, text }: IProps) => {
  return (
    <div>
      <div className="md:w-[510px] w-[280px] md:h-auto h-[90%] border border-black shadow-[10px_10px] lg:p-12 p-6 overflow-scroll scrollbar-hide">
        <div className="flex lg:flex-row flex-col lg:items-center gap-4">
          <div className="w-[72px] h-[72px] border rounded-[50%] bg-[#676767]"></div>
          <div>
            <p className="font-[Syne] font-bold text-2xl">
              {name} <br />
            </p>
            <p className="font-[Manrope] font-semibold text-xs text-[#999]">
              {title}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-[Manrope] font-semibold text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
