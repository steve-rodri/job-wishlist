import React, { useState } from "react";
import { AddJobForm } from "./components";
import "./App.css";

function App() {
  const [open, setModal] = useState(false);
  return (
    <div className="App">
      <main>
        <header>
          <div className="Icon">Icon</div>
          <div className="Title">
            <h1>WISHLIST</h1>
            <h2>Jobs</h2>
          </div>
        </header>
        <button onClick={() => setModal(true)}>+</button>
        <div className="List"></div>
      </main>
      <AddJobForm open={open} close={() => setModal(false)} />
    </div>
  );
}

export default App;
