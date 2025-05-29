import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import BarTodo from "../components/fragment/BarTodo";
import SearchForm from "../components/common/SearchForm";
import CardScroollDesktop from "../components/layout/CardScrollDekstop";
import CardScrooll from "../components/layout/CardScrooll";
import { filterTasks } from "../utils/taskUtils";
import { useDebounce } from "../hooks/useDebounce";
import { getLocalTodos } from "../utils/storageUtils";

const Main = () => {
  const [countThisWeek, setCountThisWeek] = useState(0);
  const [todayTasks, setTodayTasks] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const waktu = new Date().getHours();
  const nama = localStorage.getItem("name");

  useEffect(() => {
    const allTasks = getLocalTodos();
    setCountThisWeek(filterTasks(allTasks, "thisWeek").length);
    setTodayTasks(filterTasks(allTasks, "today"));
  }, []);

  // Effect untuk debounced search
  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setSearchResults([]);
      return;
    }
    const allTasks = getLocalTodos();
    const results = allTasks.filter((task) =>
      task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setSearchResults(results);
  }, [debouncedSearch]);

  const getGreeting = () => {
    if (waktu >= 4 && waktu <= 11) return `Good Morning ${nama}`;
    if (waktu >= 12 && waktu <= 17) return `Good Afternoon ${nama}`;
    return `Good Evening ${nama}`;
  };

  const handleClick = (item) => {
    navigate(`/todo/${item.id}`);
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="md:px-10 px-5 pb-5 pt-2 bg-black min-h-screen">
        <div className="flex flex-col gap-20">
          {/* Header */}
          <div className="sm:mt-32 mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10">
            <div className="text-white flex flex-col gap-2 sm:w-[50%]">
              <span className="text-gray-400 sm:text-2xl">{getGreeting()}</span>
              <h1 className="text-4xl sm:text-6xl font-bold">
                You have {countThisWeek} tasks <br />
                This <span className="text-secondary">week</span> 👍
              </h1>
              {/* Mobile Search */}
              <div className="mt-5 sm:hidden block">
                <SearchForm value={search} onChange={setSearch} />
              </div>
            </div>
            {/* Menu Bar */}
            <div className="flex justify-between px-5 items-center gap-5 sm:w-[50%] mt-10">
              <BarTodo
                icon="table-list"
                text="ToDo"
                color="primary"
                onClick={() => navigate("/todo")}
              />
              <BarTodo
                icon="clock"
                text="Progress"
                color="secondary"
                onClick={() => navigate("/progress")}
              />
              <BarTodo
                icon="check"
                text="Done"
                color="tertiary"
                onClick={() => navigate("/done")}
              />
            </div>
          </div>

          {/* Desktop Search */}
          <div className="sm:block hidden">
            <SearchForm value={search} onChange={setSearch} />
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="text-white mt-5">
              <h2 className="font-bold text-xl mb-3">Search Results</h2>

              {/* Mobile */}
              <div className="sm:hidden overflow-x-auto">
                <CardScrooll
                  task={searchResults}
                  className={`${
                    searchResults.length !== 0 ? "w-max" : "w-full"
                  }`}
                  onClick={handleClick}
                />
              </div>
              {/* Desktop */}
              <CardScroollDesktop task={searchResults} onClick={handleClick} />
            </div>
          )}

          {/* Today's Task */}
          <div className="text-white">
            <h2 className="font-bold sm:text-2xl">Today's Task</h2>

            {/* Mobile */}
            <div className="sm:hidden overflow-x-auto">
              <CardScrooll
                task={todayTasks}
                className={`${todayTasks.length !== 0 ? "w-max" : "w-full"}`}
                onClick={handleClick}
              />
            </div>
            {/* Desktop */}
            <CardScroollDesktop task={todayTasks} onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
