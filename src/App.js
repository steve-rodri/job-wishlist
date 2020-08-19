import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddJobForm, Job } from "./components";
import "./App.css";

function App() {
  const [open, setModal] = useState(false);
  const jobs = useSelector((state) => state);
  return (
    <div className="App">
      <main>
        <header>
          <div className="Icon">Icon</div>
          <div className="Title">
            <h1>WISHLIST</h1>
            <h2>{jobs.length} Jobs</h2>
          </div>
        </header>
        <button onClick={() => setModal(true)}>+</button>
        <div className="List">
          {jobs.map((job) => (
            <Job {...job} />
          ))}
        </div>
      </main>
      <AddJobForm open={open} close={() => setModal(false)} />
    </div>
  );
}

export default App;
