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
    <div className="login-container">
      <h1 className="heading">LOGIN PAGE</h1>
      <form onSubmit={handlesubmit} className="login-form">
          <div className="form-group">
          <label className="mail">E-mail</label>
          <input
            type="text"
            className="input"
            placeholder="enter the mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="form-group">
          <label className="mail">Password</label>
          <input
            type="password"
            className="input"
            placeholder="enter the password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          </div>
          <div className="loginpage-btn">
              <button
                type="button"
                className="newuser-btn"
                onClick={() => navigate("/register")}
                >New User</button>
              <button type="submit" className="login-btn">
                LOGIN
              </button>
            </div>
      </form>
    </div>
  );
}

export default Login;
