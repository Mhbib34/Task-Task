import React from "react";

// Map warna ke class Tailwind
const colorMap = {
  primary: "text-primary border-primary",
  secondary: "text-secondary border-secondary",
  tertiary: "text-tertiary border-tertiary",
};

const BarTodo = ({ icon, text, color = "primary" }) => {
  const colorClass = colorMap[color] || colorMap["primary"];

  return (
    <div className="flex flex-col items-center cursor-pointer gap-1">
      <div
        className={`h-14 w-14 border-2 rounded-full flex justify-center items-center ${colorClass}`}
      >
        <i className={`fa-solid fa-${icon} text-3xl`}></i>
      </div>
      <span className={`${colorClass} font-medium`}>{text}</span>
    </div>
  );
};

export default BarTodo;
