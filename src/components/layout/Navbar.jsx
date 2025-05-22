import React, { useState } from "react";
import AvatarImage from "../fragment/AvatarImage";
/* eslint-disable */
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../fragment/Logo";
import SearchForm from "../common/SearchForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const avatar = localStorage.getItem("avatar");

  return (
    <div className="flex justify-between items-center">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <i className="fa-solid fa-bars text-2xl text-primary hover:opacity-80 transition-all duration-200 ease-in-out "></i>
      </div>
      <div className="sm:block hidden">
        <SearchForm />
      </div>
      <AvatarImage image={avatar} className="w-10 h-10" />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-screen bg-black sm:w-[400px] w-[250px] z-50 p-4"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <div className="flex justify-between items-center ">
                <Logo />
                <i
                  onClick={() => setIsOpen(false)}
                  className="fa-solid fa-xmark text-2xl  cursor-pointer  text-primary hover:opacity-80 transition-all duration-200 ease-in-out "
                ></i>
                {/* Konten sidebar di sini */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
