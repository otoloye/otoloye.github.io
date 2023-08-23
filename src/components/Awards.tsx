import React from "react";
import { Icons } from "./icons";

const Awards = () => {
  return (
    <>
      <div className="lg:w-[828px] w-[90%] lg:h-[88px] border border-black shadow-[10px_10px] p-8 pr-20 my-8 flex flex-col gap-12">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center font-[Manrope] font-semibold text-base">
          <p className="flex items-center gap-4">
            {" "}
            <span>
              <Icons name="award-fill" />
            </span>
            Award
          </p>
          <p className="text-xs lg:m-0 ml-10">Awarded by</p>
          <p className="lg:m-0 ml-10">year</p>
        </div>
      </div>
    </>
  );
};

export default Awards;
