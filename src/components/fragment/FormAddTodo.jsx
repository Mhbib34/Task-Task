import React, { useState } from "react";
import { getThisWeekRange, getDayName } from "../../utils/dateUtils";
import { isTimeOverlap } from "../../utils/validationUtils";
import { ShineBorder } from "../magicui/shine-border";
import { showAlert } from "../../utils/SweetAlert";

const FormAddTodo = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [day, setDay] = useState(getDayName(new Date().getDay()));

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      showAlert({
        title: "Error",
        text: "Task title is required",
        icon: "Warning",
      });
      return;
    }

    if (!startTime || !endTime) {
      showAlert({
        title: "Error",
        text: "Start time and end time are required",
        icon: "Warning",
      });
      return;
    }

    if (startTime >= endTime) {
      showAlert({
        title: "Error",
        text: "Start time must be before end time",
        icon: "Warning",
      });
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
      startTime,
      endTime,
      day,
      status: "todo",
    };

    const existingTasks = JSON.parse(localStorage.getItem("todos")) || [];

    const thisWeekRange = getThisWeekRange();
    const overlapping = existingTasks.some((task) => {
      const taskDate = new Date(task.createdAt);
      const isSameWeek =
        taskDate >= thisWeekRange.start && taskDate <= thisWeekRange.end;

      return (
        isSameWeek &&
        task.day === newTask.day &&
        isTimeOverlap(
          task.startTime,
          task.endTime,
          newTask.startTime,
          newTask.endTime
        )
      );
    });

    if (overlapping) {
      showAlert({
        title: "Error",
        text: "Task time overlap with another task in the same day",
        icon: "Warning",
      });
      return;
    }

    const updatedTasks = [...existingTasks, newTask];
    localStorage.setItem("todos", JSON.stringify(updatedTasks));

    showAlert({
      title: "Success",
      text: "Task added successfully",
      icon: "Success",
    });

    // Reset form
    setTitle("");
    setDescription("");
    setStartTime("");
    setEndTime("");
    setDay(getDayName(new Date().getDay()));

    if (onTaskAdded) onTaskAdded();
  };

  return (
    <div className="relative rounded-xl overflow-hidden sm:w-[400px] w-[350px]">
      <ShineBorder shineColor={["#18ccfc", "#ae48ff", "red"]} borderWidth={2} />
      <form
        onSubmit={handleSubmit}
        className="p-5 text-white rounded shadow-md m-4"
      >
        <h2 className="text-2xl text-secondary font-bold mb-3 text-center">
          Add Task
        </h2>

        <div className="mb-2">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-secondary focus:outline-none placeholder:text-secondary text-secondary rounded"
          />
        </div>

        <div className="mb-2">
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-secondary focus:outline-none placeholder:text-secondary text-secondary rounded"
          />
        </div>

        <div className="mb-2 flex gap-2">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Start (Hours)
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border border-secondary focus:outline-none placeholder:text-secondary text-secondary rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              End (Hours)
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border border-secondary focus:outline-none placeholder:text-secondary text-secondary rounded"
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm text-gray-600 mb-1">Day</label>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full p-2 border border-secondary focus:outline-none placeholder:text-secondary text-secondary rounded bg-black"
          >
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="border-2 border-secondary text-secondary px-4 py-2 rounded-md cursor-pointer hover:bg-secondary hover:text-black transition-all duration-200 ease-in-out font-medium"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default FormAddTodo;
