import { filterTasks } from "./taskUtils";

export const getLocalTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const saveLocalTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getFilterTodos = (filter, filterText, filterDate) => {
  const allTasks = getLocalTodos();
  const task = filterTasks(allTasks, filter, filterDate);
  const taskDone = task.filter((t) => t.status === filterText);
  return taskDone;
};
