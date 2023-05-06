import React from "react";

const SelectField = ({ id, name, label, children, ...rest }) => {
  return (
    <div className="fieldContainer">
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <select id={id} name={name} {...rest} required>
        {children}
      </select>
    </div>
  );
};

export default SelectField;
