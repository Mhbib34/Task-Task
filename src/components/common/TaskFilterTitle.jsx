import React from "react";

const TaskFilterTitle = ({ filter, filterDate }) => {
  return (
    <h1 className="text-primary text-2xl font-bold ">
      {filter === "today"
        ? "Today's Tasks"
        : filter === "thisWeek"
        ? "This Week's Tasks"
        : filter === "date"
        ? `Tasks on ${filterDate}`
        : "All Tasks"}
    </h1>
  );
};

export default TaskFilterTitle;
