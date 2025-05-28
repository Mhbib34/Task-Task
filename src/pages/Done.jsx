import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import React, { useState } from "react";
import { colorMap } from "../utils/colorCard";
import BarTodo from "../components/fragment/BarTodo";
import TaskFilter from "../components/fragment/TaskFilter";
import CardScroollTimeline from "../components/layout/CardScroolTimeline";
import CardScroollDekstop from "../components/layout/CardScrollDekstop";
import { filterTasks } from "../utils/taskUtils";

const Done = () => {
  const [filter, setFilter] = useState("today");
  const [filterDate, setFilterDate] = useState("");
  const allTasks = JSON.parse(localStorage.getItem("todos")) || [];
  const task = filterTasks(allTasks, filter, filterDate);
  const taskDone = task.filter((t) => t.status === "Done");
  console.log(task);
  console.log(taskDone);

  const navigate = useNavigate();
  const colorKeys = Object.keys(colorMap);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorKeys.length);
    return colorKeys[randomIndex];
  };

  const handleClick = (item) => {
    console.log(item);
    navigate(`/todo/${item.id}`);
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="md:px-10 px-5 pb-5 pt-2 bg-black min-h-screen">
        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between pr-5 ">
          <BarTodo
            icon="plus"
            text="Add Task"
            onClick={() => navigate("/todo/add")}
          />
          <TaskFilter
            filter={filter}
            setFilter={setFilter}
            filterDate={filterDate}
            setFilterDate={setFilterDate}
          />
        </div>

        <div className="sm:hidden">
          <CardScroollTimeline
            onClick={handleClick}
            task={taskDone}
            filter={filter}
            filterDate={filterDate}
          />
        </div>

        <div className="mt-10">
          <CardScroollDekstop
            task={taskDone}
            getRandomColor={getRandomColor}
            filter={filter}
            filterDate={filterDate}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Done;
