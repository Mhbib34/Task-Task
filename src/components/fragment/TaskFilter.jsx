import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskFilter = ({ filter, setFilter, filterDate, setFilterDate }) => {
  const handleDateChange = (date) => {
    if (date) {
      const isoDate = date.toISOString().split("T")[0];
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
            ? "bg-secondary text-black"
            : "border border-secondary text-secondary"
        }`}
      >
        Today
      </button>
      <button
        onClick={() => setFilter("thisWeek")}
        className={`px-3 py-1 rounded ${
          filter === "thisWeek"
            ? "bg-secondary text-black"
            : "border border-secondary text-secondary"
        }`}
      >
        This Week
      </button>
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 rounded ${
          filter === "all"
            ? "bg-secondary text-black"
            : "border border-secondary text-secondary"
        }`}
      >
        All
      </button>

      <DatePicker
        selected={filterDate ? new Date(filterDate) : null}
        onChange={handleDateChange}
        placeholderText="Pick a date"
        dateFormat="yyyy-MM-dd"
        className="bg-black text-secondary border border-secondary px-2 py-1 rounded placeholder:text-secondary focus:outline-none w-44 z-[99999]"
      />
    </div>
  );
};

export default TaskFilter;
