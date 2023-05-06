import React from "react";
import AddForm from "./AddForm";

const AddJob = () => {
  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

      <div className="max-w-3xl mx-auto">
        <AddForm />
      </div>
    </>
  );
};

export default AddJob;
