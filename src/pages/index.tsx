import { Icons } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Otoloye from "../images/otoloye.png";
import Otoloye2 from "../images/otoloye2.png";
import Dog from "../images/dog.png";
import { ArrowDown, ArrowRight } from "react-feather";
import ProjectList from "@/components/ProjectList";
import Skills from "@/components/Skills";
import { useState } from "react";

export default function Home() {
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

  const projectList = [
    { title: "Project 01 title", category: "project category", year: "2021" },
    { title: "Project 02 title", category: "project category", year: "2021" },
    { title: "Project 03 title", category: "project category", year: "2021" },
  ];
  const [onHover, setOnHover] = useState(false);
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <>
        <div className="flex items-end lg:px-36 md:px-14 px-6">
          <div className="">
            <p className="font-[Syne] font-bold text-2xl">Hello, I am </p>
            <p className="font-[Syne] font-bold md:text-9xl text-7xl">
              Otoloye
            </p>

            <p className="font-[Syne] font-bold md:text-9xl text-7xl">
              Oyeniran
            </p>

            <p className="font-[Manrope] font-semibold text-xl md:max-w-[400px] mt-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>

            <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-6 mt-14 w-3/4">
              <p
                className="flex gap-3 items-center font-bold font-[Syne] text-2xl cursor-pointer w-[224px] hover:text-white relative text-hover"
                onMouseOver={() => setOnHover(!onHover)}
                onMouseOut={() => setOnHover(false)}>
                <Icons name={`${onHover ? "chat" : "chat-fill"}`} />
                <span>LET&#39;S CHAT</span>
              </p>

              <p className="flex gap-3 items-center font-bold font-[Syne] text-2xl cursor-pointer relative after:absolute after:w-full after:bg-black after:h-[2px] after:bottom-0 after:left-0 navlink">
                <span>Get Resume</span>
                <Icons name="download" />
              </p>
            </div>
          </div>
          <div className="h-[326px] w-[208px] pt-10 lg:block hidden">
            <Image src={Otoloye} alt="OT" className="ml-10" />
          </div>
        </div>

        <div className="flex justify-end pr-44 pt-10 animate-pulse">
          <Icons name="scroll" />
        </div>
        <div className="md:mt-60 mt-14 flex md:flex-row flex-col md:items-center justify-between gap-28 lg:px-36 md:px-14 px-6">
          <div className="relative md:basis-1/2 w-full h-full bg-[#96B78E]">
            <Image
              src={Otoloye}
              alt="OT"
              className="hidden md:block object-cover w-full"
            />
            <Image
              src={Otoloye2}
              alt="OT"
              className="md:hidden h-full w-full object-contain"
            />
          </div>
          <div className="md:basis-1/2">
            <p className="font-[Syne] font-bold lg:text-7xl md:text-6xl text-5xl">
              Founder of Wajusoft
            </p>
            <p className="font-[Manrope] font-semibold text-xl max-w-[400px] my-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <p className="font-[Syne] font-bold md:text-2xl flex items-center gap-2.5 w-[409px] cursor-pointer hover:text-white relative text-hover">
              LEARN MORE ABOUT ME
              <span>
                <ArrowRight />
              </span>
            </p>
          </div>
        </div>

        {/* project */}
        {/* <div className="my-52 lg:px-36 md:px-14 px-6 md:flex">
          <div className="basis-1/2 md:flex flex-col justify-between">
            <p className="font-[Syne] font-bold md:text-8xl text-6xl md:mb-0 mb-6">
              Some of the good stuff
            </p>
            <div className="hidden md:flex flex-col gap-10">
              <ProjectList />
            </div>
          </div>
          <div className="basis-1/2 ">
            <p className="font-[Manrope] font-semibold text-2xl mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <p className="uppercase font-[Syne] font-bold text-2xl hidden md:flex items-center gap-2.5 w-[310px] hover:text-white relative text-hover ">
              see more work
              <span>
                <ArrowRight />
              </span>
            </p>

            <div className="mt-28 h-[568px] w-[530px] bg-[#242424]"></div>
          </div>
        </div> */}
        <div className="my-52 lg:px-36 md:px-14 px-6 ">
          <div className="flex md:flex-row flex-col">
            <p className="font-[Syne] font-bold md:text-8xl text-6xl md:mb-0 mb-6">
              Some of the good stuff
            </p>
            <div>
              <p className="font-[Manrope] font-semibold text-2xl mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <p className="uppercase font-[Syne] font-bold text-2xl hidden md:flex items-center gap-2.5 w-[310px] hover:text-white relative text-hover ">
                see more work
                <span>
                  <ArrowRight />
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-10">
              {projectList.map((item) => {
                return (
                  <ProjectList
                    title={item.title}
                    category={item.category}
                    year={item.year}
                    key={item.title}
                  />
                );
              })}
            </div>

            <div className="mt-28 h-[568px] w-[530px] bg-[#242424]"></div>
          </div>
        </div>

        {/* Skills  */}
        <div className="mb-40 ">
          <div className="lg:px-36 md:px-14 px-6 flex justify-between items-center">
            <p className="font-[Syne] font-bold text-8xl">Skills</p>
            <div className="md:flex hidden gap-8">
              <span className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
                <Icons name="arrow-left" />
              </span>

              <span className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
                <Icons name="arrow-right" />
              </span>
            </div>
          </div>
          <div className="flex flex-nowrap space-x-14 lg:px-36 md:px-14 px-6 overflow-x-scroll scrollbar-hide">
            {skillsList.map((item) => {
              return (
                <Skills title={item.title} text={item.text} key={item.title} />
              );
            })}
          </div>
        </div>
        {/* playground  */}
        <div className="py-20">
          <p className="font-[Syne] font-bold md:text-8xl text-6xl lg:px-36 md:px-14 px-6">
            Playground
          </p>
          <div className="lg:px-36 md:px-14 px-6 my-10 flex justify-between">
            <p className="flex items-center gap-4 font-[Manrope] font-extrabold text-base">
              When I&#39;m not coding...{" "}
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

          <div className="">
            <ul className="flex gap-24 lg:px-36 md:px-14 px-6 text-[#999] font-[Syne] font-bold md:text-[72px] text-[40px] overflow-x-scroll scrollbar-hide">
              <li className="hover:text-black">MUSIC</li>
              <li className="hover:text-black">DOGS</li>
              <li className="hover:text-black">WATCHES</li>
              <li className="hover:text-black">PERFUMES</li>
            </ul>
          </div>

          <div className="px-32 mt-20 flex justify-between">
            <p className="basis-[40%] font-[Manrope] font-semibold text-lg my-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <div className="basis-1/3">
              <Image src={Dog} alt="hobby" className="" />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

