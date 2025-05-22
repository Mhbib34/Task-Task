import React from "react";

const colorMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  red: "bg-red-500",
  black: "bg-black",
  purple: "bg-purple-700",
  zinc: "bg-zinc-700",
};
const CardTodo = ({ color = "secondary" }) => {
  const colorClass = colorMap[color] || colorMap["secondary"];
  return (
    <div
      className={`text-white mt-5 ${colorClass} sm:w-[400px] w-[250px] p-4 rounded-lg flex flex-col gap-2`}
    >
      <span className="text-2xl font-bold italic">Take a shower</span>
      <p className="text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, iste.
      </p>
      <span className="font-medium">9:00 am</span>
      <div className="w-full mt-5 flex justify-between font-medium">
        <span>Progress</span>
        <span>50%</span>
      </div>
    </div>
  );
};

export default CardTodo;
