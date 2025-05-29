import { pad } from "../../utils/timeUtils";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskFilter = ({ filter, setFilter, filterDate, setFilterDate }) => {
  const handleDateChange = (date) => {
    if (date) {
      const isoDate = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
        date.getDate()
      )}`;
      setFilterDate(isoDate);
      setFilter("date");
    }
  };

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <button
        onClick={() => setFilter("today")}
        className={`px-3 py-1 rounded ${
          filter === "today"
            ? "bg-primary text-black"
            : "border border-primary text-primary"
        }`}
      >
        Today
      </button>
      <button
        onClick={() => setFilter("thisWeek")}
        className={`px-3 py-1 rounded ${
          filter === "thisWeek"
            ? "bg-primary text-black"
            : "border border-primary text-primary"
        }`}
      >
        This Week
      </button>
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 rounded ${
          filter === "all"
            ? "bg-primary text-black"
            : "border border-primary text-primary"
        }`}
      >
        All
      </button>

      <DatePicker
        selected={filterDate ? new Date(filterDate) : null}
        onChange={handleDateChange}
        placeholderText="Pick a date"
        dateFormat="yyyy-MM-dd"
        className="bg-black text-primary border border-primary px-2 py-1 rounded placeholder:text-primary focus:outline-none w-44 z-[99999]"
      />
    </div>
  );
};

export default TaskFilter;
