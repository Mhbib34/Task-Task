import React from "react";

const AvatarImage = ({ image, isSelected, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} rounded-full cursor-pointer transition-all duration-200 ease-in-out
        ${isSelected ? "scale-110 ring-4 ring-secondary" : "hover:scale-110"}
      `}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default AvatarImage;
