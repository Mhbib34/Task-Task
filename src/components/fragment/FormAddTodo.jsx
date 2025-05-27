import React, { useState, useEffect } from "react";
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
import StatusButtons from "./StatusButton";
import { useNavigate } from "react-router-dom";

const FormAddTodo = ({
  onTaskAdded,
  initialData = null,
  onSubmit,
  onStatusChange,
  onClick,
}) => {
  const navigate = useNavigate();
  const now = getNowTime();

  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [startTime, setStartTime] = useState(
    initialData?.startTime || now.start
  );
  const [endTime, setEndTime] = useState(initialData?.endTime || now.end);
  const [date, setDate] = useState(initialData?.date || now.date);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setStartTime(initialData.startTime || now.start);
      setEndTime(initialData.endTime || now.end);
      setDate(initialData.date || now.date);
    }
    //eslint-disable-next-line
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm({ title, startTime, endTime, date })) return;

    const taskData = {
      ...initialData,
      id: initialData?.id || Date.now(),
      title,
      description,
      createdAt: initialData?.createdAt || new Date().toISOString(),
      startTime,
      endTime,
      date,
      status: initialData?.status || "Todo",
    };

    if (checkOverlap(taskData)) {
      return showAlert({
        title: "Error",
        text: "Task time overlaps with another task on the same date",
        icon: "warning",
      });
    }

    if (onSubmit) {
      onSubmit(taskData);
    } else {
      submitNewTask(taskData, () => {
        setTitle("");
        setDescription("");
        setStartTime(now.start);
        setEndTime(now.end);
        setDate(now.date);
        if (onTaskAdded) onTaskAdded();
      });
      navigate("/todo");
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden sm:w-[400px] w-[350px]">
      <ShineBorder shineColor={["#18ccfc", "#ae48ff", "red"]} borderWidth={2} />
      <form
        onSubmit={handleSubmit}
        className="p-5 text-white rounded shadow-md m-4"
      >
        <h2 className="text-2xl text-secondary font-bold mb-3 text-center">
          {initialData ? "Update Task" : "Add Task"}
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
          text={initialData ? "Update Task" : "Create Task"}
          type="submit"
          className="border-2 border-secondary text-secondary px-4 py-2 rounded-md cursor-pointer hover:bg-secondary hover:text-black transition-all duration-200 ease-in-out font-medium w-full"
        />
        <div className={`${initialData ? "block" : "hidden"}`}>
          <StatusButtons onStatusChange={onStatusChange} />
        </div>
        <div className={`${initialData ? "block" : "hidden"} mt-5`}>
          <ButtonForm
            onClick={onClick}
            text="Delete"
            type="button"
            className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-black transition-all duration-200 ease-in-out font-medium w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default FormAddTodo;
