import React, { useState } from "react";
import { isTimeOverlap } from "../../utils/validationUtils";
import { ShineBorder } from "../magicui/shine-border";
import { showAlert } from "../../utils/SweetAlert";

const FormAddTodo = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const now = new Date();
  const pad = (num) => String(num).padStart(2, "0");
  const formatTime = (date) =>
    `${pad(date.getHours())}:${pad(date.getMinutes())}`;

  const defaultStart = formatTime(now);

  const [startTime, setStartTime] = useState(defaultStart);
  const [endTime, setEndTime] = useState(defaultStart);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      showAlert({
        title: "Error",
        text: "Task title is required",
        icon: "warning",
      });
      return;
    }

    if (!startTime || !endTime) {
      showAlert({
        title: "Error",
        text: "Start time and end time are required",
        icon: "warning",
      });
      return;
    }

    if (startTime >= endTime) {
      showAlert({
        title: "Error",
        text: "Start time must be before end time",
        icon: "warning",
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
      date,
      status: "todo",
    };

    const existingTasks = JSON.parse(localStorage.getItem("todos")) || [];

    const overlapping = existingTasks.some((task) => {
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

    if (overlapping) {
      showAlert({
        title: "Error",
        text: "Task time overlaps with another task on the same date",
        icon: "warning",
      });
      return;
    }

    const updatedTasks = [...existingTasks, newTask];
    localStorage.setItem("todos", JSON.stringify(updatedTasks));

    showAlert({
      title: "Success",
      text: "Task added successfully",
      icon: "success",
    });

    setTitle("");
    setDescription("");
    setStartTime("");
    setEndTime("");
    setDate(new Date().toISOString().split("T")[0]);

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
          <label className="block text-sm text-gray-600 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-secondary focus:outline-none placeholder:text-secondary text-secondary rounded bg-black"
          />
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
