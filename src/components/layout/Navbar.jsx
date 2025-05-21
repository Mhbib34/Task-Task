import React, { useState } from "react";
import AvatarImage from "../fragment/AvatarImage";
/* eslint-disable */
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const avatar = localStorage.getItem("avatar");

  return (
    <div className="flex justify-between items-center">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <i className="fa-solid fa-bars text-2xl text-white "></i>
      </div>
      <AvatarImage image={avatar} className="w-10 h-10" />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0  bg-opacity-50 z-40"
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
              transition={{ type: "tween", duration: 0.3 }}
            >
              <i
                onClick={() => setIsOpen(false)}
                className="fa-solid fa-xmark text-2xl text-white cursor-pointer absolute top-4 right-4"
              ></i>
              {/* Konten sidebar di sini */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
