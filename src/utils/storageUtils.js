export const getLocalTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const saveLocalTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
