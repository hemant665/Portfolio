// import React from 'react'
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import About from "./About/About";
import HeroSection from "./HeroSection";
import Quote from "./Quote/Quote";
import Project from "./Projects/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div
      className="w-full min-h-screen pb-1"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="w-full xl:w-[80rem] mx-auto h-full py-2 px-3 "
      >
        <Navbar />
        <HeroSection />
        <About />
        <Quote />
        <Project />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
