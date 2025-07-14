import React from "react";
import { motion } from "framer-motion";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-full flex flex-col items-center justify-center mt-45 "
      >
        <div className="bg-blue-700 w-[15rem] relative flex items-center justify-center ">
          <span className="h-0.5">
            <hr />
          </span>
          <h1 className="absolute text-xl bg-[#F0F6FF] p-4 text-[#1C45E3]">
            Get In Touch
          </h1>{" "}
        </div>

        <div className="mt-7 flex flex-col items-center justify-center  gap-5 ">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="text-xl text-zinc-500 max-w-[44rem] flex justify-center text-center leading-relaxed">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="w-full flex gap-4 mt-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="w-1/3 rounded-2xl duration-200 p-7 bg-white shadow-xl hover:-translate-y-2 hover:shadow-blue-300"
        >
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="w-[4rem]  rounded-2xl"><hr className="h-1 bg-blue-700 border-0 mt-1"/></div>
            
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className=" w-2/3 rounded-2xl p-7 bg-white shadow-xl"
        >
            <h2 className="text-2xl font-semibold">Send Me a Message</h2>
            <div className="w-[4rem]  rounded-2xl"><hr className="h-1 bg-blue-700 border-0 mt-1"/></div>

            <div className="mt-4 w-full flex flex-col gap-4">
                  <div className="flex gap-2 w-full items-center ">
                        <Input label="Your Name" placeholder="Jhon Doe" type="text"/>
                        <Input label="Email Address" placeholder="john@example.com" type="email"/>
                  </div>
                  <Input label="Subject" placeholder="Project Inquiry" type="text" />
                  <Textarea label="Your Message" placeholder="i'd like to discuss a project...." rows={7}/>
                  <div className="h-[3.1rem] text-xl">
                        <Button value="Send Message" className="text-white h-full" send/> 
                  </div>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
