import React, { useState } from "react";
import AvatarImage from "../fragment/AvatarImage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const avatar = localStorage.getItem("avatar");

  return (
    <div className="flex justify-between items-center">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <i className="fa-solid fa-bars text-2xl text-white "></i>
      </div>
      <AvatarImage image={avatar} className="w-10 h-10" />
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } h-screen bg-black absolute left-0 top-0 sm:w-[400px] w-[250px] z-50`}
      >
        <i
          onClick={() => setIsOpen(false)}
          className="fa-solid fa-xmark text-2xl text-white cursor-pointer absolute top-4 right-4"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
