import React from "react";
import moment from "moment";
import "./index.css";

export const Job = ({ company, jobTitle, timeAdded, color }) => {
  return (
    <div className="Job" style={{ backgroundColor: color }}>
      <div className="logo"></div>
      <main>
        <div className="description">
          <h2>{company}</h2>
          <h4>{jobTitle}</h4>
        </div>
        <div className="time-added">added {moment(timeAdded).fromNow()}</div>
      </main>
    </div>
  );
};

export default Job;
