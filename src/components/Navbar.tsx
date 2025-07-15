import React from "react";
import Button from "../components/Button";


const Navbar = () => {
  const NavElements = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Work", link: "#work" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <div className="w-full sticky top-0 flex justify-between items-center py-7 bg-[#F0F6FF] z-[1]">
      <a href="#home" ><h1 className="font-bold text-xl md:text-2xl text-[#1C45E3]">
        Hemant Kumar
      </h1></a>
      <div className="hidden md:block">
        <ul className="flex gap-7">
          {NavElements.map((item, indx) => (
            // <li key={indx}>
              <a key={indx} href={item.link}>{item.title}</a>
            // </li>
          ))}
        </ul>
      </div>
      <Button className="text-white" variant="effects" ><a href="#contact">Let's Talk</a></Button>
    </div>
  );
};

export default Navbar;
