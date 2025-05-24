import FormAddTodo from "../components/fragment/FormAddTodo";

function Todo({ onTaskAdded }) {
  return (
    <div className="bg-black h-screen p-4">
      <FormAddTodo onTaskAdded={onTaskAdded} />
    </div>
  );
}

export default Todo;
