import Navbar from "../components/layout/Navbar";
import FormAddTodo from "../components/fragment/FormAddTodo";

function Todo({ onTaskAdded }) {
  return (
    <div className="bg-black h-screen md:px-10 px-5 py-5">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <FormAddTodo onTaskAdded={onTaskAdded} />
      </div>
    </div>
  );
}

export default Todo;
