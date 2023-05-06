import React from "react";
import JobListItem from "./JobListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "../../features/jobs/JobsSlice";
import { useLocation } from "react-router-dom";

const JobList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  let { jobs, isLoading, isError, error, searchText, sortText } = useSelector(
    (state) => state.jobs
  );

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (location.pathname === "/jobs/internship") {
    jobs = jobs.filter(job => job.type === "Internship");
  } else if (location.pathname === "/jobs/remote") {
    jobs = jobs.filter(job => job.type === "Remote");
  }else if (location.pathname === "/jobs/full-time") {
    jobs = jobs.filter(job => job.type === "Full Time");
  }

  //decide what to render
  let content;

  if (isLoading) content = <div className="text-slate-300">Jobs are loading...</div>;
  if (!isLoading && isError)
    content = <div className="!text-[#FF8A00]">{error}</div>;

  if (!isError && !isLoading && jobs?.length === 0) {
    content = <div className="!text-[#FF8A00]">No jobs found!</div>;
  }

  if (!isError && !isLoading && jobs?.length > 0) {
    // eslint-disable-next-line array-callback-return
    content = jobs.filter((job)=>{
      if(searchText === ""){
        return job;
      }else if( job.title
        .toLowerCase()
        .includes(searchText.toLowerCase())){
          return job;
        }
    // eslint-disable-next-line array-callback-return
    }).sort((job1, job2)=>{
      if(sortText === "Low to High"){
        return job1.salary - job2.salary;
      }else if(sortText === "High to Low"){
        return job2.salary - job1.salary;
      }
    }).map((job) => <JobListItem key={job.id} job={job} />);
  }

  return <div className="jobs-list">{content}</div>;
};

export default JobList;
