import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BarTodo from "../components/fragment/BarTodo";
import Navbar from "../components/layout/Navbar";
import { colorMap } from "../utils/colorCard";
import CardScrooll from "../components/layout/CardScrooll";
import CardScroollDekstop from "../components/layout/CardScrollDekstop";
import { filterTasks } from "../utils/taskUtils";
import TaskFilter from "../components/fragment/TaskFilter";

function Todo() {
  const [filter, setFilter] = useState("today");
  const [filterDate, setFilterDate] = useState("");

  const allTasks = JSON.parse(localStorage.getItem("todos")) || [];
  const task = filterTasks(allTasks, filter, filterDate);

  const navigate = useNavigate();
  const colorKeys = Object.keys(colorMap);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorKeys.length);
    return colorKeys[randomIndex];
  };

  return (
    <div className="md:px-10 pl-5 pb-5 pt-10 bg-black min-h-screen">
      <Navbar />
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

      <h1 className="text-white text-2xl font-bold mt-10">
        {filter === "today"
          ? "Today's Tasks"
          : filter === "thisWeek"
          ? "This Week's Tasks"
          : filter === "date"
          ? `Tasks on ${filterDate}`
          : "All Tasks"}
      </h1>

      <div className="sm:hidden overflow-x-auto">
        <CardScrooll task={task} getRandomColor={getRandomColor} />
      </div>

      <CardScroollDekstop task={task} getRandomColor={getRandomColor} />
    </div>
  );
}

export default Todo;
