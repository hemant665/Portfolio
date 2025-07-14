import React from "react";
import Button from "../components/Button";

const Navbar = () => {
  const NavElements = ["Home", "About", "Skills", "Work", "Contact"];

  return (
    <div className="w-full sticky top-0 flex justify-between items-center py-7 bg-[#F0F6FF] z-[1]">
      <h1 className="font-bold text-xl md:text-2xl text-[#1C45E3]">Hemant Kumar</h1>
      <div className="hidden md:block">
        <ul className="flex gap-7">
          {NavElements.map((item, indx) => (
            <li key={indx}> {item} </li>
          ))}
        </ul>
      </div>
      <Button value="Let's Talk" className="text-white" variant="effects" />
    </div>
  );
};

export default Navbar;