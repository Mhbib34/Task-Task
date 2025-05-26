import React from "react";

const Input = ({ type, value, onChange, className, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border border-secondary focus:outline-none placeholder:text-secondary text-secondary rounded ${className}`}
    />
  );
};

export default Input;
