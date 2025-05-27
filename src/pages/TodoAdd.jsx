import Navbar from "../components/layout/Navbar";
import FormAddTodo from "../components/fragment/FormAddTodo";

function TodoAdd({ onTaskAdded }) {
  return (
    <div className="md:px-10 px-5 pb-5 pt-2 bg-black min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-full mt-32">
        <FormAddTodo onTaskAdded={onTaskAdded} />
      </div>
    </div>
  );
}

export default TodoAdd;
