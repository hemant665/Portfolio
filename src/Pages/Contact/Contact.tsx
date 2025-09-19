import { motion } from "framer-motion";

// Icons
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

// Components

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-full flex flex-col items-center justify-center mt-25 "
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
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="w-full grid lg:grid-cols-[40%_60%] gap-4 mt-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="w-full  rounded-2xl duration-200 p-7 bg-white shadow-xl hover:-translate-y-2 hover:shadow-blue-300"
        >
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <div className="w-[4rem]  rounded-2xl">
            <hr className="h-1 bg-blue-700 border-0 mt-1" />
          </div>

          <div className="w-full flex flex-col  gap-5 mt-6">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
            <div className="flex items-center group gap-5">
              <span className="bg-blue-700 p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <FaLocationDot className="text-white text-xl " />
              </span>
              <div>
                <h2>Location</h2>
                <p className="text-zinc-500">Jhunjhunu (Rajasthan) , India</p>
              </div>
            </div>
            <div className="flex items-center group gap-5">
              <span className="bg-blue-700 p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <GrMail className="text-white text-xl " />
              </span>
              <div>
                <h2>Email</h2>
                <a
                  href="mailto:hemant04kumawat@gmail.com"
                  className=" text-blue-700 w-full "
                >
                  Hemant04kumawat@gmail.com
                </a>
              </div>
            </div>
            </div>

            <div>
              <h3 className="font-semibold">Connect With Me</h3>
              <div className="flex gap-4 mt-3 ">
                <span className="bg-zinc-800 p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-zinc-500">
                  <a href="https://github.com/hemant665" target="_blank">
                    <FaGithub className="text-white text-3xl" />
                  </a>
                </span>
                <span className="bg-blue-600 p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500 ">
                  <a
                    href="https://www.linkedin.com/in/hemant-kumawat"
                    target="_blank"
                  >
                    <FaLinkedin className="text-white text-3xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl p-7 bg-white shadow-xl"
        >
          <h2 className="text-2xl font-semibold">Send Me a Message</h2>
          <div className="w-[4rem]  rounded-2xl">
            <hr className="h-1 bg-blue-700 border-0 mt-1" />
          </div>

          <ContactForm />
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
