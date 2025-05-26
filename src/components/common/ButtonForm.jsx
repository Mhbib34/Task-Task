import React from "react";

const ButtonForm = ({ text, type, className }) => {
  return (
    <button type={type} className={`${className}`}>
      {text}
    </button>
  );
};

export default ButtonForm;
