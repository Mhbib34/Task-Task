// src/utils/taskUtils.js
import { getThisWeekRange } from "./dateUtils";

export const filterTasks = (tasks, filter, filterDate = "") => {
  if (filter === "today") {
    const todayStr = new Date().toISOString().split("T")[0];
    return tasks.filter((task) => task.date === todayStr);
  } else if (filter === "thisWeek") {
    const { start, end } = getThisWeekRange();
    return tasks.filter((task) => {
      const taskDate = new Date(task.date);
      return taskDate >= start && taskDate <= end;
    });
  } else if (filter === "date" && filterDate) {
    return tasks.filter((task) => task.date === filterDate);
  } else {
    return tasks;
  }
};
