import { ArrowLeft, ArrowRight, MehIcon } from "lucide-react";
import CardTodo from "../fragment/CardTodo";
import TaskFilterTitle from "../common/TaskFilterTitle";
import { useRef } from "react";

const CardScrollDesktop = ({ task, filter, filterDate, onClick }) => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative hidden sm:block">
      {/* Ini muncul di mobile */}
      <div className="sm:hidden">
        <TaskFilterTitle filter={filter} filterDate={filterDate} />
      </div>

      {/* Tombol scroll kiri */}
      <ArrowLeft
        onClick={scrollLeft}
        className={`${
          task.length === 0 ? "hidden" : "absolute"
        } left-0 top-1/2 -translate-y-1/2 w-9 h-9 cursor-pointer text-white p-2 rounded-full z-10 shadow-black shadow-sm`}
      />

      {/* Tombol scroll kanan */}
      <ArrowRight
        onClick={scrollRight}
        className={`${
          task.length === 0 ? "hidden" : "absolute"
        } right-0 top-1/2 -translate-y-1/2 w-9 h-9 cursor-pointer text-white p-2 rounded-full z-10 shadow-black shadow-sm`}
      />

      {/* Kontainer scroll */}
      <div
        ref={scrollRef}
        className="overflow-x-auto mt-5 max-w-full px-12 scroll-smooth"
      >
        <div className={`flex gap-4 ${task.length !== 0 ? "w-max" : "w-full"}`}>
          {task.length === 0 ? (
            <div className="text-white mt-10 rounded-lg flex justify-center w-full gap-2 flex-col items-center">
              <MehIcon className="w-24 h-24 text-primary" />
              <span className="font-bold text-2xl text-primary">No Task</span>
            </div>
          ) : (
            task
              .slice()
              .sort((a, b) => a.startTime.localeCompare(b.startTime))
              .map((item) => (
                <CardTodo key={item.id} item={item} onClick={onClick} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardScrollDesktop;
