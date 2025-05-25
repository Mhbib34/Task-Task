import { colorMap } from "../../utils/colorCard";
import React from "react";

const CardTodo = ({ color = "secondary", item }) => {
  const colorClass = colorMap[color] || colorMap["secondary"];
  return (
    <div
      className={`text-white mt-5 ${colorClass} sm:w-[400px] w-[250px] p-4 rounded-lg flex flex-col gap-2 justify-between`}
    >
      <span className="text-2xl font-bold italic">{item.title}</span>
      <p className="text-gray-100">{item.description}</p>
      <span className="font-medium">
        {item.startTime} - {item.endTime}
      </span>
      <div className="w-full mt-5 flex justify-between font-medium">
        <span>Status</span>
        <span className="font-bold">{item.status}</span>
      </div>
    </div>
  );
};

export default CardTodo;
