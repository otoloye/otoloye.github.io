import { Icons } from "@/components/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:px-36 md:px-14 px-6 py-20 bg-[#242424]">
      <div className="">
        <div className="flex lg:flex-row flex-col justify-between w-7/12">
          <p className="text-white font-[Manrope] font-extrabold text-2xl lg:m-0 mb-6">
            Want to get in touch?
          </p>
          <p className="text-white font-[Manrope] font-semibold text-base">
            I&#39;m just an email away, <br /> <span>leave me a line</span>
          </p>
        </div>

        <div className="mt-8">
          <p className="font-[Syne] font-bold lg:text-[112px] text-[38px] leading-normal text-white mb-10 relative after:absolute after:w-full after:bg-white after:h-[2px] after:bottom-0 after:left-0 navlink">
            ot@wajusoft.com
          </p>
          <p className="flex md:justify-end gap-3 items-center font-bold text-white font-[Syne] text-2xl capitalize cursor-pointer relative after:absolute after:w-[15%] after:bg-white after:h-[2px] after:bottom-0 after:right-0 navlink">
            <Icons name="chat" />

            <span>Let&#39;s chat</span>
          </p>
        </div>

        <div className="lg:mt-3 mt-20 text-white flex md:flex-row flex-col gap-10 justify-between border-b border-[#4F4F4F] pb-8">
          <p className="font-[Manrope] font-semibold text-2xl">
            Otoloye Oyeniran <br />{" "}
            <span className="text-[#676767] text-base">Software Developer</span>
          </p>
          <p className="font-[Manrope] font-semibold text-base text-[#676767]">
            Based in <br />{" "}
            <span className="text-white">Philadelphia, USA</span>
          </p>
          <div className="flex flex-wrap md:justify-center items-center">
            <a href="#">
              <p className="mx-4 border-b hover:text-[#676767] hover:border-[#676767]">
                Twitter
              </p>
            </a>
            <a href="#">
              <p className="mx-4 border-b hover:text-[#676767] hover:border-[#676767]">
                LinkedIn
              </p>
            </a>
            <a href="#">
              <p className="mx-4 border-b hover:text-[#676767] hover:border-[#676767]">
                Instagram
              </p>
            </a>
            <a href="#">
              <p className="mx-4 border-b hover:text-[#676767] hover:border-[#676767]">
                Github{" "}
              </p>
            </a>
            <a href="#">
              <p className="mx-4 border-b hover:text-[#676767] hover:border-[#676767]">
                Medium
              </p>
            </a>
          </div>
        </div>

        <div className="flex justify-between mt-8 font-[Manrope]">
          <p className="font-semibold text-[#676767]">
            Development <span className="font-extrabold text-white">OT</span>
          </p>
          <p className="font-semibold text-[#676767]">
            Design <span className="font-extrabold text-white">@atnda</span>
          </p>
        </div>

        <div className="mt-16">
          <p className="flex gap-4 uppercase text-[#676767]">
            <span>
              <Icons name="logo-white" />
            </span>
            2023.All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
