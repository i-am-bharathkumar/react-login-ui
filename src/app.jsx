import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/login.jsx"; 
import Database from "./components/Database_stored/database.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Register from "./components/Auth/register.jsx";
import "./index.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/database" element={<Database />} />
      <Route path="/nav" element={<Nav />} /> 
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </div>
  );
}

export default App; 