import React from "react";
import ProjectImg from "../../../assets/Images/Project1.avif";
import ButtonCard from "./ButtonCard";
import { IoIosArrowForward } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


let projectDetails = [
  { Icon: TbBrandReact, title: "React" },
  { Icon: SiTailwindcss, title: "TailWind CSS" },
  { Icon: RiJavascriptFill, title: "JavaScript" },
];

const SingleCard = () => {
  return (
    <div className="bg-white p-2 rounded-2xl pb-7 cursor-pointer hover:scale-101 hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] duration-300 hover:shadow-blue-400">
      <div className="rounded-xl overflow-hidden relative">
        <img src={ProjectImg} alt={ProjectImg} />
        {/* <div className="absolute top-0 h-full w-full bg-amber-500"> </div> */}
      </div>
      <div className="mt-3 p-2 flex flex-col gap-3">
        <h1 className="font-semibold text-2xl ">Live Talking App</h1>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, magnam?
        </p>
        <div className=" grid grid-cols-4 gap-3 ">
          {projectDetails.map((item,index) => (
                <ButtonCard Icon={item.Icon} key={index} title={item.title}/>

          ))}
          <ButtonCard />
          <ButtonCard />
          <ButtonCard />
        </div>

        <div className="text-blue-700 font-semibold flex gap-2 transition-all group duration-300 items-center mt-1">
          <a href="">Explore Live Demo</a>{" "}
          <IoIosArrowForward className="font-semibold text-xl hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
