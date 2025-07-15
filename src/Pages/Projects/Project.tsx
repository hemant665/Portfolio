import React from "react";
import { motion } from "framer-motion";
import SingleCard from "./Components/SingleCard";

const Project = () => {
  return (
    <motion.div 
    id="work"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      viewport={{ once: true }}
      className="w-full h-full flex flex-col items-center justify-center mt-45 scroll-mt-32"
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </motion.div>
    </motion.div>
  );
};

export default Project;
