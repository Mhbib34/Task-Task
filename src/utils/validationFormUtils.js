import { isTimeOverlap } from "./validationUtils";
import { showAlert } from "./SweetAlert";
import { getLocalTodos, saveLocalTodos } from "./storageUtils";

//eslint-disable-next-line
export const validateForm = ({ title, startTime, endTime, date }) => {
  if (!title.trim()) {
    showAlert({
      title: "Error",
      text: "Task title is required",
      icon: "warning",
    });
    return false;
  }

  if (!startTime || !endTime) {
    showAlert({
      title: "Error",
      text: "Start time and end time are required",
      icon: "warning",
    });
    return false;
  }

  if (startTime >= endTime) {
    showAlert({
      title: "Error",
      text: "Start time must be before end time",
      icon: "warning",
    });
    return false;
  }

  return true;
};

export const checkOverlap = (newTask) => {
  const existingTasks = getLocalTodos();
  return existingTasks.some((task) => {
    if (task.id === newTask.id) return false;

    const isSameDate = task.date === newTask.date;
    return (
      isSameDate &&
      isTimeOverlap(
        task.startTime,
        task.endTime,
        newTask.startTime,
        newTask.endTime
      )
    );
  });
};

export const submitNewTask = (taskData, onSuccess) => {
  const existingTasks = getLocalTodos();
  const updatedTasks = [...existingTasks, taskData];
  saveLocalTodos(updatedTasks);
  showAlert({
    title: "Success",
    text: "Task added successfully",
    icon: "success",
  });
  if (onSuccess) onSuccess();
};
