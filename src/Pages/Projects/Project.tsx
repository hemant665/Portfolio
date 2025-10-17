// import React from "react";
import { motion } from "framer-motion";
import SingleCard from "./Components/SingleCard";
import TourGoTravelImg from "../../assets/Project/TourGoTravel.webp";
import PortFolioImg from "../../assets/Project/PortFolioImg.png";
import CohortProjectImg from "../../assets/Project/CohortProjectImg.png";
import AabeliTea from "../../assets/Project/AabeliTea.png"
export interface projectDetails {
  ProjectImg: string;
  name: string;
  desc: string;
  technology: string[];
  link?: string;
}

const projectLists: projectDetails[] = [
  {
    ProjectImg: CohortProjectImg,
    name: "Productivity DashBoard",
    desc: "An all-in-one productivity dashboard that combines to-do lists, daily planning, Pomodoro timer, goals, and motivational tools in one place.",
    technology: ["HTML", "CSS", "Tailwind CSS ", "JavaScript"],
    link: "https://github.com/hemant665/Productivity-DashBoard",
  },
  {
    ProjectImg: PortFolioImg,
    name: "PortFolio",
    desc: "A personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience. It highlights my work as a frontend developer with a clean UI and responsive design.",
    technology: [
      "HTML",
      "CSS",
      "Tailwind CSS ",
      "JavaScript",
      "TypeScript",
      "React",
    ],
    link: "",
  },
  {
    ProjectImg: TourGoTravelImg,
    name: "Tour Go Travel",
    desc: "A responsive travel website built with React with TypeScript. It lets users explore destinations, view travel packages, and read blogs with smooth UI, fast performance, and modern design.",
    technology: [
      "HTML",
      "CSS",
      "Tailwind CSS ",
      "JavaScript",
      "TypeScript",
      "React",
    ],
    link: "https://tourgotravel.in/",
  },
  {
    ProjectImg: AabeliTea,
    name: "Tea E-Commerce Website",
    desc: "An online platform for exploring and purchasing a variety of premium teas. It offers a smooth shopping experience with features like product browsing, cart management, and secure checkout",
    technology: [
      "JavaScript",
      "Tailwind CSS ",
      "React",
      "Motion",
      "Rest",
    ],
    link: "https://aabelitea.com/",
  },

];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};



const Project:React.FC= () => {
  return (
    <motion.div
      id="work"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className="w-full h-full flex flex-col items-center justify-center mt-25 scroll-mt-32"
    >
      <div className="bg-blue-700 w-[15rem] relative flex items-center justify-center ">
        <span className="h-0.5">
          <hr />
        </span>
        <h1 className="absolute text-xl bg-[#F0F6FF] p-4 text-[#1C45E3]">
          My Portfolio
        </h1>{" "}
      </div>

      <div className="mt-7 flex flex-col items-center justify-center  gap-5 ">
        <h1 className="text-5xl font-bold"> Recent Projects</h1>
        <p className="text-xl text-zinc-500 max-w-[44rem] flex justify-center text-center leading-relaxed">
          Browse through my latest projects, showcasing my skills in web
          development and design. Each project represents a unique challenge and
          solution.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {projectLists.map((project, index) => (
          <motion.div key={index} variants={item}>
            <SingleCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;
