import React from "react";
import Sorting from "./Sorting";
import { useDispatch } from "react-redux";
import { searchJob } from "../../features/jobs/JobsSlice";
import { useLocation } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  let title = "All Available Jobs";

  if(location.pathname === "/jobs/internship"){
    title = "Internship";
  }else if(location.pathname === "/jobs/remote"){
    title = "Remote";
  }else if(location.pathname === "/jobs/full-time"){
    title = "Full Time";
  }

  const handleChange = (e) => {
    const searchValue = e.target.value;
    dispatch(searchJob(searchValue));
  }

  
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">{title}</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            onChange={handleChange}
          />
        </div>
        <Sorting />
      </div>
    </div>
  );
};

export default Search;
