import React from "react";

const SelectOption = ({ title, value, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {title}
    </option>
  );
};

export default SelectOption;
