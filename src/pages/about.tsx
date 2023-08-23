import Interests from "@/components/Interests";
import { Icons } from "@/components/icons";
import React from "react";
import OTBackground from "../images/otoloye4.png";
import OTImage from "../images/otoloye3.png";
import Image from "next/image";
import { ArrowDown } from "react-feather";
import Testimonies from "@/components/Testimonies";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import AboutSkills from "@/components/AboutSkills";

const about = () => {
  const interestList = [
    {
      icon: "box-fill",
      title: "Blockchain",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },
    {
      icon: "phone-fill",
      title: "Mobile Engineering",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },
    {
      icon: "clouds-fill",
      title: "Cloud Engineering",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },
  ];

  const testimonyList = [
    {
      name: "Kevin Anderson",
      title: "Product Manager at Google",
      text: "Working with OT was a fantastic experience! His expertise and attention to detail were evident throughout the project, and his ability to communicate complex technical ideas in a clear manner.",
    },
    {
      name: "Precious Hill",
      title: "Growth Marketer at Xcellence",
      text: "As a startup, we were looking for a software engineer who could help us quickly build and deploy our product. Otoloye delivered on all fronts, providing expert guidance and support throughout the entire development process. His work was instrumental in getting our product to market, and we would definitely work with him again.",
    },
    {
      name: "James Milan",
      title: "CEO at Duffle Co.",
      text: "I was impressed with OT from the moment we met. His deep understanding of the latest software techniques and technologies, combined with his problem-solving skills, made him an invaluable member of our team.",
    },
  ];

  const eduList = [
    {
      startYear: "200x",
      endYear: "200x",
      course: "Information and Communication Science",
      school: "Telkom University",
    },
    {
      startYear: "200x",
      endYear: "200x",
      course: "Information and Communication Science",
      school: "Telkom University",
    },
    {
      startYear: "200x",
      endYear: "200x",
      course: "Information and Communication Science",
      school: "Telkom University",
    },
  ];
  const skillsList = [
    {
      title: "Programming Languages",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      title: "Library",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      title: "Databases",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];
  return (
    <div className="lg:px-32 px-6 mb-32">
      <div>
        <p className="font-[Syne] font-bold md:text-9xl text-7xl">Founder, </p>
        <div className="flex lg:ml-28">
          <div className="h-[137px] w-[137px] rounded-[50%] border border-black shadow-[8px_7px] hidden md:flex justify-center items-center">
            <p className="font-[Manrope] font-semibold text-xs text-[#676767] pl-8 ">
              Founded{" "}
              <span className="font-[Syne] text-[40px] text-[#242424]">
                2021
              </span>
            </p>
          </div>
          <p className="font-[Syne] font-bold md:text-9xl text-7xl">
            Wajusoft{" "}
          </p>
        </div>
      </div>

      <div className="w-[1146px] h-[194px] bg-[#676767] my-16 lg:block hidden">
        <Image src={OTBackground} alt="otoloye" />
      </div>

      <div className="lg:flex items-end gap-16 mt-32 h-full">
        <p className="font-[Syne] font-bold text-4xl lg:block hidden">
          Sed ut perspiciatis unde omnis iste natus error sit food voluptatem
          accusa ntium doloremque lauda ntium.
        </p>

        <div className="flex flex-col gap-16">
          <div className="md:w-[656px] md:h-[338px] bg-[#676767]">
            <Image src={OTImage} alt="otoloye" />
          </div>
          <p className="font-[Syne] font-bold text-4xl block lg:hidden">
            Sed ut perspiciatis unde omnis iste natus error sit food voluptatem
            accusa ntium doloremque lauda ntium.
          </p>
          <p className="font-[Manrope] font-semibold text-base">
            Sed ut perspiciatis unde omnis iste natus Lorem ipsum dolor sit
            amet, consectetur error sit voluptatem accusantium varius dolor,
            vitae gravida quam congue eget. doloremque laudantium vestibulum In
            sed augue quis felis viverra pretium. Nulla Proin auctor quam eu
            fringillat diam ullamcorper vitae.
          </p>
        </div>
      </div>

      {/* Interests  */}
      <div className="my-40">
        <div className="flex justify-between items-center">
          <p className="font-[Syne] font-bold md:text-8xl text-6xl">
            Interests
          </p>
          <div className="md:flex hidden gap-8">
            <span className="hover:scale-125 transition-all duration-75 ease-in cursor-pointer">
              <Icons name="arrow-left" />
            </span>

            <span className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
              <Icons name="arrow-right" />
            </span>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col flex-nowrap md:space-x-14 overflow-scroll scrollbar-hide">
          {interestList.map((item, index) => {
            return (
              <>
                <Interests
                  icon={item.icon}
                  text={item.text}
                  title={item.title}
                />
              </>
            );
          })}
        </div>
      </div>

      {/* Skills  */}
      <div>
        <div className="mb-16">
          <p className="font-[Syne] font-bold md:text-8xl text-6xl">Skills</p>
        </div>
        <div>
          {skillsList.map((item) => {
            return (
              <>
                <AboutSkills title={item.title} />
              </>
            );
          })}
        </div>
        {/* <div className="w-[1096px] h-[387px] border border-black relative lg:block hidden folder"></div> */}
      </div>

      {/* Testimonies  */}
      <div className="my-36">
        <p className="font-[Syne] font-bold md:text-8xl text-5xl">
          Testimonies
        </p>
        <div className="my-10 hidden md:flex justify-between">
          <p className="flex items-center gap-4 font-[Manrope] font-extrabold text-base">
            What Industry experts have to say about me...
            <span className="md:block hidden">
              <ArrowDown />
            </span>
          </p>
          <div className="flex gap-8">
            <span className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
              <Icons name="arrow-left" />
            </span>

            <span className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
              <Icons name="arrow-right" />
            </span>
          </div>
        </div>

        <div className="mt-24 flex flex-nowrap space-x-14 overflow-scroll scrollbar-hide">
          {testimonyList.map((item) => {
            return (
              <>
                <Testimonies
                  name={item.name}
                  text={item.text}
                  title={item.title}
                />
              </>
            );
          })}
        </div>
      </div>

      {/* Education  */}
      <div>
        <div className="mb-16">
          <p className="font-[Syne] font-bold md:text-8xl text-6xl">
            Education
          </p>
          <div className="flex flex-nowrap overflow-scroll scrollbar-hide space-x-12">
            {eduList.map((item) => {
              return (
                <>
                  <Education
                    startYear={item.startYear}
                    endYear={item.endYear}
                    course={item.course}
                    school={item.school}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>

      {/* Awards  */}
      <div>
        <div className="my-16">
          <p className="font-[Syne] font-bold md:text-8xl text-6xl max-w-[540px]">
            Awards & Accolades
          </p>
          <div className=" flex-nowrap overflow-scroll scrollbar-hide">
            {eduList.map((item) => {
              return (
                <>
                  <Awards />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
