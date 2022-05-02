import React from "react";

const Input = (id, type = "text", value, handleChange, label, ...rest) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={id}
        className="form-control"
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
