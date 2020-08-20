import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddJobForm, DeletePrompt, Job } from "./components";
import { magicWandIcon } from "./components/icons";
import "./App.css";

const App = () => {
  const [jobFormOpen, setJobFormModal] = useState(false);
  const [deletePromptOpen, setDeletePromptModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState();
  const jobs = useSelector((state) => state);
  return (
    <div className="App">
      <main>
        <header>
          <div className="Icon-Title">
            <div className="Icon">{magicWandIcon()}</div>
            <div className="Title">
              <h1>WISHLIST</h1>
              <h2>
                {jobs.length} JOB{jobs.length === 1 ? "" : "S"}
              </h2>
            </div>
          </div>
          <button onClick={() => setJobFormModal(true)}>+</button>
        </header>
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
};

export default App;
