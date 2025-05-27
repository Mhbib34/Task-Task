import React from "react";

const ButtonForm = ({ text, type, className, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={`${className}`}>
      {text}
    </button>
  );
};

export default ButtonForm;
