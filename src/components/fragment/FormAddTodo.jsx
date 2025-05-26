import React, { useState } from "react";
import { ShineBorder } from "../magicui/shine-border";
import { getNowTime } from "../../utils/timeUtils";
import {
  validateForm,
  checkOverlap,
  submitNewTask,
} from "../../utils/validationFormUtils";
import { showAlert } from "../../utils/SweetAlert";
import ButtonForm from "../common/ButtonForm";
import Input from "../common/Input";

const FormAddTodo = ({ onTaskAdded }) => {
  const now = getNowTime();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState(now.start);
  const [endTime, setEndTime] = useState(now.end);
  const [date, setDate] = useState(now.date);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm({ title, startTime, endTime, date })) return;

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

    if (checkOverlap(newTask)) {
      return showAlert({
        title: "Error",
        text: "Task time overlaps with another task on the same date",
        icon: "warning",
      });
    }

    submitNewTask(newTask, () => {
      setTitle("");
      setDescription("");
      setStartTime(now.start);
      setEndTime(now.end);
      setDate(now.date);
      if (onTaskAdded) onTaskAdded();
    });
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
          <Input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            <Input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              End (Hours)
            </label>
            <Input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm text-gray-600 mb-1">Date</label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <ButtonForm
          text="Create Task"
          type="submit"
          className="border-2 border-secondary text-secondary px-4 py-2 rounded-md cursor-pointer hover:bg-secondary hover:text-black transition-all duration-200 ease-in-out font-medium"
        />
      </form>
    </div>
  );
};

export default FormAddTodo;
