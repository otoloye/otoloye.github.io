import { dropdowns } from "@/components/constants";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
interface IProps {
  closeDropdown?: () => void;
}

const Dropdown = ({ closeDropdown }: IProps) => {
  return (
    <div className="absolute bg-[#242424] text-white top-0 left-0 min-h-screen w-full flex flex-col md:justify-center z-50">
      <div
        className="flex md:justify-end justify-between py-12 md:pr-36 px-10 cursor-pointer"
        onClick={closeDropdown}>
        <Link className="md:hidden flex gap-2" href="/">
          <Icons name="logo-white" />
          <p className=" font-[Manrope] font-extrabold text-base">
            Otoloye Oyeniran
          </p>
        </Link>
        <Icons name="close" />
      </div>
      <ul className="font-[Syne] font-bold text-6xl mx-auto flex flex-col md:items-center justify-center space-y-12 py-16">
        {dropdowns.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className="flex space-x-2 hover:scale-110 hover:border-b-2 transition-all duration-150">
              <span className="text-base">{`0${index + 1}`}</span>

              <p> {item.text}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
