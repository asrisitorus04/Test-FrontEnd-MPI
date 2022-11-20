import React from "react";

const Input = (props) => {
  return (
    <input
      className="w-72 h-10 py-2 px-3 rounded-md"
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};

export default Input;