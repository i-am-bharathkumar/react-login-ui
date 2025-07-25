import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    // Send POST request to backend
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful & saved to MongoDB");
        navigate("/database");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Backend error: " + error.message);
    }
  };

  return (
    <>
      <h1 className="heading">Login page</h1>
      <form onSubmit={handlesubmit}>
        <div className="containerr">
          <label className="mail">E-mail</label>
          <input
            type="text"
            className="input"
            placeholder="enter the mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="mail">Password</label>
          <input
            type="password"
            className="input"
            placeholder="enter the password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
