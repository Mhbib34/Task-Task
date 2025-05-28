import React from "react";

const CardTimeline = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="mb-4 border rounded-lg p-4 shadow-sm shadow-gray-800"
    >
      <h4 className="text-xl font-semibold text-primary">{item.title}</h4>
      <p className="text-neutral-700 dark:text-neutral-300">
        {item.description}
      </p>
      <span className="text-sm text-neutral-500">{item.date}</span>
      <div className="text-white mt-5 flex justify-between">
        <span>Status</span>
        <span
          className={`font-bold border rounded-lg px-2  ${
            item.status === "Done"
              ? "text-green-500 border-green-500"
              : item.status === "Progress"
              ? "text-yellow-500 border-yellow-500"
              : "text-red-500 border-red-500"
          }`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
};

export default CardTimeline;
