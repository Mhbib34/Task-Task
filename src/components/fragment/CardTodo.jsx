import React from "react";

const CardTodo = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      style={{ backgroundColor: item.color }}
      className={`text-white mt-5 sm:w-[400px] w-[250px] p-4 rounded-lg flex flex-col gap-2 justify-between`}
    >
      <span className="text-2xl font-bold italic">{item.title}</span>
      <p className="text-gray-100">{item.description}</p>
      <span className="font-medium">
        {item.startTime} - {item.endTime}
      </span>
      <div className="w-full mt-5 flex justify-between font-medium items-center">
        <span>Status</span>
        <span
          className={`font-bold border-2 rounded-lg px-2 py-1 ${
            item.status === "Done"
              ? "text-white border-green-500 bg-green-500"
              : item.status === "Progress"
              ? "text-white border-yellow-500 bg-yellow-500"
              : "text-white border-red-500 bg-red-500"
          }`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
};

export default CardTodo;
