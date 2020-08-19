import React, { useState } from "react";
import moment from "moment";
import "./index.css";

export const Job = ({ company, jobTitle, timeAdded, color, onDelete }) => {
  const [canDelete, setCanDelete] = useState();
  return (
    <div
      className="Job"
      style={{ backgroundColor: color }}
      onMouseEnter={() => setCanDelete(true)}
      onMouseLeave={() => setCanDelete(false)}
    >
      <div className="logo"></div>
      <main>
        <div className="description-container">
          <div className="description">
            <h2>{company}</h2>
            <h4>{jobTitle}</h4>
          </div>
          {canDelete ? (
            <div className="trashcan" onClick={onDelete}></div>
          ) : null}
        </div>
        <div className="time-added">added {moment(timeAdded).fromNow()}</div>
      </main>
    </div>
  );
};

export default Job;
