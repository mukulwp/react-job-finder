import React, { useState } from "react";
import SelectField from "../selectField/SelectField";
import SelectOption from "../selectField/SelectOption";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeJob } from "../../features/jobs/JobsSlice";

const EditForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.state.id;

  const [data, setData] = useState({
    title: location.state.title,
    type: location.state.type,
    salary: location.state.salary,
    deadline: location.state.deadline,
  });

  const { title, type, salary, deadline } = data;

  const handleChange = (e) => {
    e.preventDefault();

    dispatch(changeJob({ id, data }));

    navigate("/");
  };

  return (
    <form className="space-y-6" onSubmit={handleChange}>
      <SelectField
        id="lws-JobTitle"
        name="lwsJobTitle"
        label="Job Title"
        value={title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      >
        <SelectOption title="Select Job" hidden />
        <SelectOption title="Software Engineer" value="Software Engineer" />
        <SelectOption title="Software Developer" value="Software Developer" />
        <SelectOption
          title="Full Stack Developer"
          value="Full Stack Developer"
        />
        <SelectOption
          title="MERN Stack Developer"
          value="MERN Stack Developer"
        />
        <SelectOption title="DevOps Engineer" value="DevOps Engineer" />
        <SelectOption title="QA Engineer" value="QA Engineer" />
        <SelectOption title="Product Manager" value="Product Manager" />
        <SelectOption
          title="Social Media Manager"
          value="Social Media Manager"
        />
        <SelectOption title="Senior Executive" value="Senior Executive" />
        <SelectOption title="Junior Executive" value="Junior Executive" />
        <SelectOption
          title="Android App Developer"
          value="Android App Developer"
        />
        <SelectOption title="IOS App Developer" value="IOS App Developer" />
        <SelectOption title="Frontend Developer" value="Frontend Developer" />
        <SelectOption title="Frontend Engineer" value="Frontend Engineer" />
      </SelectField>
      <SelectField
        id="lws-JobType"
        name="lwsJobType"
        label="Job Type"
        value={type}
        onChange={(e) => setData({ ...data, type: e.target.value })}
      >
        <SelectOption title="Select Job Type" hidden />
        <SelectOption title="Full Time" value="Full Time" />
        <SelectOption title="Internship" value="Internship" />
        <SelectOption title="Remote" value="Remote" />
      </SelectField>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            value={salary}
            onChange={(e) => setData({ ...data, salary: e.target.value })}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
          value={deadline}
          onChange={(e) => setData({ ...data, deadline: e.target.value })}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditForm;
