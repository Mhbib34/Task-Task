import { useNavigate } from "react-router-dom";
import BarTodo from "../components/fragment/BarTodo";
import Navbar from "../components/layout/Navbar";
import { colorMap } from "../utils/colorCard";
import CardScrooll from "../components/layout/CardScrooll";
import CardScroollDekstop from "../components/layout/CardScrollDekstop";

function Todo() {
  const task = JSON.parse(localStorage.getItem("todos"));
  const navigate = useNavigate();
  const colorKeys = Object.keys(colorMap);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorKeys.length);
    return colorKeys[randomIndex];
  };

  return (
    <div className="bg-black h-screen md:px-10 pl-5 py-5">
      <Navbar />
      <div className="mt-10">
        <BarTodo
          icon="plus"
          text="Add Task"
          onClick={() => navigate("/todo/add")}
        />
      </div>
      <h1 className="text-white text-2xl font-bold mt-10">Today Task</h1>
      <div className="sm:hidden overflow-x-auto ">
        <CardScrooll task={task} getRandomColor={getRandomColor} />
      </div>
      <CardScroollDekstop task={task} getRandomColor={getRandomColor} />
    </div>
  );
}

export default Todo;
