import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";
import Database from "./components/database.jsx";
import LandingPage from "./components/LandingPage.jsx";
import "./index.css"; // Importing the CSS file for Tailwind CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from "./components/Nav.jsx";
import Register from "./components/register.jsx";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} /> // ✅ Register component route
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/database" element={<Database />} />
      <Route path="/nav" element={<Nav />} /> // ✅ Nav component route
      <Route path="/landing" element={<LandingPage />} />   // ✅ LandingPage route
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </div>
  );
}

export default App; // ✅ This is required!
