
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";

const quickLinks = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Work", link: "#work" },
  { title: "Contact", link: "#contact" },
];

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="mt-7 w-full">
            <hr className="bg-gradient-to-l from-[F0F6FF] via-blue-500 to-[F0F6FF] h-1 rounded-2xl border-0"/>
      </div>
      <div className="w-full flex items-center justify-center mt-7">
            <span className="hover:scale-110 hover:shadow-lg hover:shadow-purple-300 rounded-full"> <a href="#home"><FaArrowUp className="text-white rounded-full p-3 bg-gradient-to-tr from-blue-600 to-purple-400 text-5xl"/></a></span>
      </div>
      <div className="w-full flex items-center gap-15 mt-15 pb-10">
        <div className="w-1/2">
          <div className="flex flex-col gap-3">
            <h1 className="text-blue-700 text-3xl font-semibold">
              Hemant Kumar
            </h1>
            <p className="text-zinc-500">
              Passionate Full-Stack Web Developer specializing in creating
              beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex gap-5">
              <span className="bg-zinc-800 p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
                <a href="https://github.com/hemant665" target="_blank">
                  <FaGithub className="text-white text-xl" />
                </a>
              </span>
              <span className="bg-blue-700 p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/hemant-kumawat"
                  target="_blank"
                >
                  <FaLinkedin className="text-white text-xl " />
                </a>
              </span>
              <span className="bg-gradient-to-bl from-blue-700 to-purple-400 p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
                <a href="mailto:hemant04kumawat@gmail.com" target="_blank">
                  <HiMail className="text-white text-xl " />
                </a>
              </span>
            </div>
          </div>
          <div></div>
        </div>

        <div className="w-1/2 flex">
          <div className="w-full">
            <h2 className="font-semibold text-xl">Quick Links</h2>
            <span>
              <hr className="w-[3rem] h-[.2rem] rounded-2xl bg-blue-700" />
            </span>
            {quickLinks.map((item, index) => (
              <ul key={index} className="mt-3">
                <li className="text-zinc-700 ">
                  <a href={item.link}>{item.title}</a>
                </li>
              </ul>
            ))}
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-xl">Contact</h2>
            <span>
              <hr className="w-[3rem] h-[.2rem] rounded-2xl bg-blue-700" />
            </span>
            <ul className="flex flex-col gap-2 mt-3 text-zinc-700">
              <li>
                <a href="#">Jhunjhunu, Rajasthan, India</a>
              </li>
              <li>
                <a href="#">hemant04kumawat@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
            <hr className="text-zinc-400"/>
      <div className="w-full flex justify-between mt-7 text-zinc-600">
            <h2>© 2025 Hemant Kumar. All rights reserved.</h2>
            <h2>Designed and built with ❤ by Hemant Kumar</h2>
      </div>


    </div>
  );
};

export default Footer;
