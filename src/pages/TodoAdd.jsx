import Navbar from "../components/layout/Navbar";
import FormAddTodo from "../components/fragment/FormAddTodo";

function TodoAdd({ onTaskAdded }) {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div className="md:px-10 px-5 pb-5 bg-black ">
        <div className="flex justify-center items-center h-full mt-24">
          <FormAddTodo onTaskAdded={onTaskAdded} />
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
