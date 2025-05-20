import React from "react";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

const ButtonNext = ({ text, href }) => {
  return (
    <Button
      href={href}
      className="px-4 py-2 bg-gray-900 flex items-center rounded-full  gap-1 text-primary group hover:scale-105 transition-all duration-200 ease-in-out hover:text-black hover:bg-primary"
      text={text}
    >
      <ArrowRight className="text-sm" />
    </Button>
  );
};

export default ButtonNext;
