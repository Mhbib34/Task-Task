import React from "react";

const SearchForm = ({ value, onChange }) => {
  return (
    <div className="border-2 border-primary px-2 rounded-md py-2 sm:w-[600px]  flex items-center">
      <i className="fa-solid fa-magnifying-glass text-primary"></i>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 focus:outline-none placeholder:text-primary w-full text-primary"
        placeholder="Search Task Title"
      />
    </div>
  );
};

export default SearchForm;
