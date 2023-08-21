import { Icons } from "@/components/icons";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const closeDropdown = () => {
    if (showDropdown) setShowDropdown(false);
  };
  return (
    <>
      <div className="flex justify-between items-center h-[88px] lg:px-36 md:px-14 px-6">
        <Link className="flex gap-2" href="/">
          <Icons name="logo" />
          <p className=" font-[Manrope] font-extrabold text-base">
            Otoloye Oyeniran
          </p>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <span>
            <Icons name="music-fill" />
          </span>
          <p className="font-[Syne] font-bold text-xs">
            When the Party&#39;s over <br />{" "}
            <span className="font-semibold text-[10px] flex gap-1">
              Billie Eilish <Icons name="music-stroke" />
            </span>
          </p>
          <span>
            <Icons name="play" />
          </span>
        </div>

        <button
          className="cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}>
          <Icons name="menu" />
        </button>
      </div>
      {showDropdown && <Dropdown closeDropdown={closeDropdown} />}
    </>
  );
};

export default Header;
