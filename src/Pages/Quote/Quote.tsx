import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Quote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      viewport={{ once: true }}
      className="w-[45rem] mx-auto bg-white mt-10 rounded-2xl p-5"
    >
      <div className="flex justify-start">
        <FaQuoteLeft className="text-blue-300" />
      </div>
      <div className="p-5">
        <p className="text-2xl text-center ">
          I believe in crafting code that is not just functional, but also
          clean, efficient, and maintainable. My goal is to build applications
          that provide exceptional user experiences.
        </p>
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-blue-700 text-lg">Hemant Kumar</h2>
          <p className="text-xs text-zinc-500">Full Stack Developer</p>
        </div>
        <div className="flex justify-end">
          <FaQuoteRight className="text-blue-300 " />
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;
