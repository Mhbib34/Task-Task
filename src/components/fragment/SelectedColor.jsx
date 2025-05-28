import React from "react";

const SelectedColor = ({ isSelected, color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={`w-10 h-10 rounded-full cursor-pointer transition-transform duration-200 ease-in-out
        ${isSelected ? "scale-110 ring-4 ring-white" : "hover:scale-110"}`}
    />
  );
};

export default SelectedColor;
