import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[88px] lg:px-36 md:px-14 px-6">
      <Link className="flex gap-2" href="/">
        <Icons name="logo" />
        <p className=" font-[Manrope] font-extrabold text-base">
          Otoloye Oyeniran
        </p>
      </Link>
      <div className="cursor-pointer">
        <Icons name="menu" />
      </div>
    </div>
  );
};

export default Header;
