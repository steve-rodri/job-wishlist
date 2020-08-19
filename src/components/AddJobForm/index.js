import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../../redux";
import { genRandomColor } from "../helpers";
import Modal from "../Modal";
import "./index.css";

export const AddJobForm = ({ open, close }) => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const timeAdded = Date.now();
    const color = genRandomColor();
    dispatch(addJob({ company, jobTitle, color, timeAdded }));
    close();
  };
  return (
    <Modal open={open} close={close}>
      <div className="AddJobForm">
        <h1>Add a job</h1>
        <form onSubmit={handleSubmit}>
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
        <button type="submit" onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default AddJobForm;
