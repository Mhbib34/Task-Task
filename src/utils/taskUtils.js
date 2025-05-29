// src/utils/taskUtils.js
import { getThisWeekRange } from "./dateUtils";

export const filterTasks = (tasks, filter, filterDate = "") => {
  if (filter === "today") {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    return tasks.filter((task) => task.date === todayStr);
  } else if (filter === "thisWeek") {
    const { start, end } = getThisWeekRange();

    return tasks.filter((task) => {
      const [year, month, day] = task.date.split("-");
      const taskDate = new Date(+year, +month - 1, +day);
      return taskDate >= start && taskDate <= end;
    });
  } else if (filter === "date" && filterDate) {
    return tasks.filter((task) => task.date === filterDate);
  } else {
    return tasks;
  }
};
