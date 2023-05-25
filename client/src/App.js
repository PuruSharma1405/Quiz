import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Taketest from "./components/TakeTest.";
import Dashboard from "./components/Dashboard";
import Testresult from "./components/TestResult";
import Ques from "./components/Question";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Taketest />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/abouttest" element={<Testresult />} />
      <Route path="/test" element={<Ques />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
