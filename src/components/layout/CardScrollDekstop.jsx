import { ArrowLeft, ArrowRight } from "lucide-react";
import CardTodo from "../fragment/CardTodo";
import { useRef } from "react";
import { MehIcon } from "lucide-react";
const CardScroollDekstop = ({
  task,

  getRandomColor,
}) => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
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
        <div className={`flex gap-4 ${task ? "w-max" : "w-full"} `}>
          {!task ? (
            <div className="text-white mt-10 rounded-lg flex justify-center w-full gap-2 flex-col items-center">
              <MehIcon className="w-24 h-24 text-primary" />
              <span className="font-bold text-2xl text-primary">No Task</span>
            </div>
          ) : (
            task
              .slice()
              .reverse()
              .map((item, index) => (
                <CardTodo key={index} item={item} color={getRandomColor()} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardScroollDekstop;
