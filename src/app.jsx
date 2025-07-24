import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";
import Database from "./components/database.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/database" element={<Database />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App; // ✅ This is required!
