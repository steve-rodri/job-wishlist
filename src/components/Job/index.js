import React, { useState } from "react";
import { trashIcon, suitcaseIcon } from "../icons";
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
      <div className="logo">{suitcaseIcon()}</div>
      <main>
        <div className="description-container">
          <div className="description">
            <h3>{company}</h3>
            <h5>{jobTitle}</h5>
          </div>
          {canDelete ? (
            <div className="trashcan" onClick={onDelete}>
              {trashIcon()}
            </div>
          ) : null}
        </div>
        <div className="time-added">added {moment(timeAdded).fromNow()}</div>
      </main>
    </div>
  );
};

export default Job;
