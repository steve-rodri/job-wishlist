import React, { useState } from "react";
import Modal from "../Modal";
import "./index.css";

export const AddJobForm = ({ open, close }) => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  return (
    <Modal open={open} close={close}>
      <div className="AddJobForm">
        <h1>Add a job</h1>
        <form action="">
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={({ target: { value } }) => setCompany(value)}
          />
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={({ target: { value } }) => setJobTitle(value)}
          />
        </form>
        <button type="submit">Continue</button>
      </div>
    </Modal>
  );
};

export default AddJobForm;
