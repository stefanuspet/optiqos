import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import About from "./components/About";
import Data from "./components/Data";
import Formula from "./components/Formula";
import InputData from "./components/InputData";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="about" />} />
        <Route path="about" element={<About />} />
        <Route path="data" element={<Data />} />
        <Route path="formula" element={<Formula />} />
        <Route path="inputData" element={<InputData />} />
      </Route>
    </Routes>
  );
};

export default App;
