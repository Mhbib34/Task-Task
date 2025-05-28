import { useParams, useNavigate } from "react-router-dom";
import FormAddTodo from "../components/fragment/FormAddTodo";
import { showAlert } from "../utils/SweetAlert";
import Navbar from "../components/layout/Navbar";
import NotFound from "./404";

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const taskIndex = todos.findIndex((t) => String(t.id) === id);
  const task = todos[taskIndex];

  if (!task) return <NotFound />;

  const handleUpdate = (updatedTask) => {
    const updatedTodos = [...todos];
    updatedTodos[taskIndex] = updatedTask;
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    navigate("/todo");
  };

  const handleStatusChange = (newStatus) => {
    handleUpdate({ ...task, status: newStatus });
  };

  const handleDelete = async () => {
    const result = await showAlert({
      title: "Delete Task",
      text: "Are you sure you want to delete this task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const updatedTodos = todos.filter((t) => String(t.id) !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      await showAlert({
        title: "Deleted!",
        text: "Your task has been deleted.",
        icon: "success",
      });
      navigate("/todo");
    }
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="md:px-10 px-5 pb-5 pt-2 bg-black min-h-screen">
        <div className="flex justify-center items-center mt-20">
          <FormAddTodo
            initialData={task}
            onSubmit={handleUpdate}
            onStatusChange={handleStatusChange}
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
