import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Range } from "./Components/Range";
import { NormalRange } from "./Components/NormalRange";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Range />} />
        <Route exact path="/exercise1" element={<NormalRange />} />
      </Routes>
    </Router>
  );
};

export default App;
