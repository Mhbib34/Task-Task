import FormAddTodo from "../components/fragment/FormAddTodo";

function Todo({ onTaskAdded }) {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <FormAddTodo onTaskAdded={onTaskAdded} />
    </div>
  );
}

export default Todo;
