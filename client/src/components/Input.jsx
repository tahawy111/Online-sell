import React from "react";

const Input = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.id}
        className="form-control"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
