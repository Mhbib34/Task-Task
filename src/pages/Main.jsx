import BarTodo from "../components/fragment/BarTodo";
import SearchForm from "../components/common/SearchForm";
import Navbar from "../components/layout/Navbar";
import React, { useRef } from "react";
import CardTodo from "../components/fragment/CardTodo";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const waktu = new Date().getHours();
  const nama = localStorage.getItem("name");
  const navigate = useNavigate();
  const getGreeting = () => {
    if (waktu >= 4 && waktu <= 11) return `Good Morning ${nama}`;
    if (waktu >= 12 && waktu <= 17) return `Good Afternoon ${nama}`;
    return `Good Evening ${nama}`;
  };
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="md:pl-10 pl-5 pb-5 pt-10 bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-20">
        <div className="sm:mt-32 mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10 pr-5 md:pr-10">
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
        <div className="flex flex-col gap-20 sm:mt-14">
          <div className="">
            <div className="flex justify-between items-center text-white  pr-5 md:pr-10">
              <h2 className="font-bold sm:text-2xl">Today's Task</h2>
            </div>

            <div className="sm:hidden overflow-x-auto ">
              <div className="flex gap-4 w-max">
                <CardTodo color="secondary" />
                <CardTodo color="tertiary" />
                <CardTodo color="black" />
                <CardTodo color="red" />
                <CardTodo color="zinc" />
                <CardTodo color="purple" />
              </div>
            </div>

            {/* Desktop: dengan tombol scroll */}
            <div className="relative hidden sm:block">
              {/* Tombol kiri */}
              <ArrowLeft
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 cursor-pointer text-white p-2 rounded-full z-10 shadow-black shadow-sm"
              />

              {/* Tombol kanan */}
              <ArrowRight
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 cursor-pointer text-white p-2 rounded-full z-10 shadow-black shadow-sm"
              />

              {/* Kontainer scroll */}
              <div
                ref={scrollRef}
                className="overflow-x-auto mt-5 max-w-full px-12 scroll-smooth"
              >
                <div className="flex gap-4 w-max">
                  <CardTodo color="secondary" />
                  <CardTodo color="tertiary" />
                  <CardTodo color="black" />
                  <CardTodo color="red" />
                  <CardTodo color="zinc" />
                  <CardTodo color="purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
