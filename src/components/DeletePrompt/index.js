import React from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { deleteJob } from "../../redux";
import "./index.css";

export const DeletePrompt = ({ job, close, ...rest }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteJob(job));
    close();
  };
  return (
    <Modal close={close} {...rest}>
      <div className="DeletePrompt">
        <main>
          <h2>Delete Job</h2>
          <h4>Are you sure you want to delete this job?</h4>
          <div className="buttons">
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="cancel" onClick={close}>
              Cancel
            </button>
          </div>
        </main>
      </div>
    </Modal>
  );
};

export default DeletePrompt;
