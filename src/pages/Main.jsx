import BarTodo from "../components/fragment/BarTodo";
import SearchForm from "../components/common/SearchForm";
import Navbar from "../components/layout/Navbar";
import React from "react";

const Main = () => {
  const waktu = new Date().getHours();
  const nama = localStorage.getItem("name");
  const getGreeting = () => {
    if (waktu >= 4 && waktu <= 11) return `Good Morning ${nama}`;
    if (waktu >= 12 && waktu <= 17) return `Good Afternoon ${nama}`;
    return `Good Evening ${nama}`;
  };

  return (
    <div className="md:px-10 px-5 pb-5 pt-10 bg-black h-screen">
      <Navbar />
      <div className="mt-20 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10">
        <div className="text-white flex flex-col gap-2 sm:w-[50%]">
          <span className="text-gray-400 sm:text-2xl">{getGreeting()}</span>
          <h1 className="text-4xl sm:text-6xl font-bold">
            You have 40 tasks <br />
            This <span className="text-secondary">week</span>👍
          </h1>
          <div className="mt-5 sm:hidden block">
            <SearchForm />
          </div>
        </div>
        <div className="flex justify-between px-5 items-center gap-5 sm:w-[50%]">
          <BarTodo icon="table-list" text="ToDo" color="primary" />
          <BarTodo icon="clock" text="Progress" color="secondary" />
          <BarTodo icon="check" text="Done" color="tertiary" />
        </div>
      </div>
    </div>
  );
};

export default Main;
