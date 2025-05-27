import React from "react";
import { MehIcon } from "lucide-react";
import CardTodo from "../fragment/CardTodo";

const CardScrooll = ({ task, getRandomColor }) => {
  return (
    <div>
      <div
        className={` flex gap-4  ${task.length !== 0 ? "w-max" : "w-full"} `}
      >
        {task.length === 0 ? (
          <div className="text-white mt-36 rounded-lg flex justify-center w-full gap-2 flex-col items-center">
            <MehIcon className="w-24 h-24 text-primary" />
            <span className="font-bold text-2xl text-primary">No Task</span>
          </div>
        ) : (
          task
            .slice()
            .sort((a, b) => a.startTime.localeCompare(b.startTime))
            .map((item, index) => (
              <CardTodo key={index} item={item} color={getRandomColor()} />
            ))
        )}
      </div>
    </div>
  );
};

export default CardScrooll;
