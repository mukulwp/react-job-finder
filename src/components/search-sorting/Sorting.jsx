import React from "react";
import { useDispatch } from "react-redux";
import { sortJob } from "../../features/jobs/JobsSlice";

const Sorting = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const sortValue = e.target.value;
    dispatch(sortJob(sortValue));
  };

  return (
    <select
      id="lws-sort"
      name="sort"
      autoComplete="sort"
      className="flex-1"
      onChange={handleChange}
    >
      <option value="Default">Default</option>
      <option value="Low to High">Salary (Low to High)</option>
      <option value="High to Low">Salary (High to Low)</option>
    </select>
  );
};

export default Sorting;
