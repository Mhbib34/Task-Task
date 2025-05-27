import BarTodo from "../components/fragment/BarTodo";
import SearchForm from "../components/common/SearchForm";
import Navbar from "../components/layout/Navbar";
import { colorMap } from "../utils/colorCard";
import { useNavigate } from "react-router-dom";
import CardScroollDekstop from "../components/layout/CardScrollDekstop";
import CardScrooll from "../components/layout/CardScrooll";
import { useEffect, useState } from "react";
import { filterTasks } from "../utils/taskUtils";

const Main = () => {
  const [countThisWeek, setCountThisWeek] = useState(0);
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("todos")) || [];
    const tasksThisWeek = filterTasks(allTasks, "thisWeek");
    const tasksToday = filterTasks(allTasks, "today");
    setTodayTasks(tasksToday);
    setCountThisWeek(tasksThisWeek.length);
  }, []);

  const waktu = new Date().getHours();
  const nama = localStorage.getItem("name");
  const navigate = useNavigate();
  const colorKeys = Object.keys(colorMap);
  const getGreeting = () => {
    if (waktu >= 4 && waktu <= 11) return `Good Morning ${nama}`;
    if (waktu >= 12 && waktu <= 17) return `Good Afternoon ${nama}`;
    return `Good Evening ${nama}`;
  };

  // Fungsi untuk ambil warna random
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorKeys.length);
    return colorKeys[randomIndex];
  };
  return (
    <div className="md:px-10 px-5 pb-5 pt-2 bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-20">
        {/* ini main */}
        <div className="sm:mt-32 mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10  ">
          <div className="text-white flex flex-col gap-2 sm:w-[50%]">
            <span className="text-gray-400 sm:text-2xl">{getGreeting()}</span>
            <h1 className="text-4xl sm:text-6xl font-bold">
              You have {countThisWeek} tasks <br />
              This <span className="text-secondary">week</span>👍
            </h1>
            <div className="mt-5 sm:hidden block">
              <SearchForm />
            </div>
          </div>
          <div className="flex justify-between px-5 items-center gap-5 sm:w-[50%] mt-10">
            <BarTodo
              icon="table-list"
              text="ToDo"
              color="primary"
              onClick={() => navigate("/todo")}
            />
            <BarTodo icon="clock" text="Progress" color="secondary" />
            <BarTodo icon="check" text="Done" color="tertiary" />
          </div>
        </div>
        {/* ini card */}
        <div className="flex flex-col gap-20 sm:mt-14">
          <div className="">
            <div className="flex justify-between items-center text-white ">
              <h2 className="font-bold sm:text-2xl">Today's Task</h2>
            </div>

            <div className="sm:hidden overflow-x-auto ">
              <CardScrooll
                task={todayTasks}
                getRandomColor={getRandomColor}
                className={`${todayTasks.length !== 0 ? "w-max" : "w-full"}`}
              />
            </div>

            <CardScroollDekstop
              task={todayTasks}
              getRandomColor={getRandomColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
