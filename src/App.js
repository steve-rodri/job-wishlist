import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddJobForm, DeletePrompt, Job } from "./components";
import "./App.css";

function App() {
  const [jobFormOpen, setJobFormModal] = useState(false);
  const [deletePromptOpen, setDeletePromptModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState();
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
        <button onClick={() => setJobFormModal(true)}>+</button>
        <div className="List">
          {jobs.map((job) => (
            <Job
              {...job}
              onDelete={() => {
                setJobToDelete(job);
                setDeletePromptModal(true);
              }}
            />
          ))}
        </div>
      </main>
      <AddJobForm open={jobFormOpen} close={() => setJobFormModal(false)} />
      <DeletePrompt
        open={deletePromptOpen}
        close={() => setDeletePromptModal(false)}
        job={jobToDelete}
      />
    </div>
  );
}

export default App;
