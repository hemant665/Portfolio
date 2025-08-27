import React from "react";
// import ProjectImg from "../../../assets/Images/Project1.avif";
import ButtonCard from "./ButtonCard";
import { IoIosArrowForward } from "react-icons/io";
import { projectDetails } from "../Project";


interface projectProps{
  project : projectDetails;
}


const SingleCard:React.FC<projectProps> = ({project}) => {
  return (
    <div className="w-full h-[32rem] flex flex-col justify-between bg-white p-2 rounded-2xl pb-7 hover:scale-101 hover:shadow-[0_0_15px_rgba(0,0,0,0.35)] duration-300 hover:shadow-blue-400">
      <div className="rounded-xl overflow-hidden relative h-[12rem] w-full">
        <img src={project?.ProjectImg} alt={project?.ProjectImg} className="h-full w-full object-cover"/>
        {/* <div className="absolute top-0 h-full w-full bg-amber-500"> </div> */}
      </div>
      <div className="mt-3 p-2 flex flex-col gap-3">
        <h1 className="font-semibold text-2xl ">{project?.name}</h1>
        <p className="text-sm">
          {project?.desc.length > 200 ? project?.desc.slice(0,200)+"..." : project?.desc}
        </p>
        <div className=" grid grid-cols-3 gap-3 ">
          {project?.technology.map((item,index) => (
                <ButtonCard key={index} title={item}/>
          ))}
        </div>

        <div className="text-blue-700 font-semibold flex gap-2 transition-all group items-center mt-1">
          <a href={`${project?.link}`} target="_blank" className="group">Explore Live Demo</a>
          <IoIosArrowForward className="font-semibold text-xl group-hover:translate-x-1 duration-300" />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
