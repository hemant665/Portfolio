import React from "react";
import Button from "../components/Button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import HomeImg from "../assets/Images/herosections-DhS7Ncv1.png";
const HeroSection = () => {
  return (
    <div id="home" className="w-full h-full grid grid-cols-1 md:grid-cols-2 mt-7 gap-4 overflow-hidden scroll-mt-20">
      <div className="w-full h-full flex flex-col gap-3 lg:gap-5 xl:gap-9">
        <div className="flex">
          <h1 className="bg-white px-5 py-2 text-[#1C45E3] rounded-4xl">
            Full Stack Developer
          </h1>
        </div>
        <div className="text-4xl lg:text-6xl font-bold flex flex-col xl:flex-row gap-3 ">
          <h1>Hi, I'm</h1>
          <h1 className="text-[#1C45E3]">Hemant Kumar</h1>
        </div>

        <h1 className="text-[#4A5565] text-xl md:text-2xl lg:text-4xl">
          Full Stack Developer
        </h1>

        <p className="text-sm md:text-md lg:text-xl">
          I design and develop experiences that make people's lives simple
          through Web apps. I work with MERN Stack and modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-5  lg:h-[3rem]">
          <Button
            arrow
            className="text-white text w-[10rem] h-[3rem]"
            variant="effects"
          ><a href="#contact">Contact Me</a></Button>
          <Button className="bg-white h-[3rem] w-[9rem]" variant="simple" ><a href="#work">View Works</a></Button>
        </div>
        <div className="flex gap-4 p-2">
            <span className="bg-white p-2 rounded-lg text-3xl hover:-translate-y-1 duration-300 hover:shadow-blue-700 shadow-sm hover:shadow-md">
                  <a href="https://www.linkedin.com/in/hemant-kumawat" target="_blank">
                        <FaLinkedin className="text-blue-700 bg-white rounded" />
                  </a>
            </span>

          <span className="bg-white p-2 rounded-lg text-3xl hover:-translate-y-1 duration-300 shadow-sm hover:shadow-black hover:shadow-md">
            <a href="https://github.com/hemant665" target="_blank">
            <FaGithub className="bg-white rounded" />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center lg:justify-end p-5 ">
        <div className=" shadow-md shadow-[#1C45E3] rounded-2xl flex items-center justify-center w-[25rem] lg:w-[30rem] p-3">
          <img src={HomeImg} alt={HomeImg} className="object-cover " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
