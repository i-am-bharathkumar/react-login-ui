import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import dashboard from "./dashboard.jsx";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (email === "bk" && password === "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
      <h1 className="heading">Login page</h1>
      <form onSubmit={handlesubmit}>
        <div className="container">
          <label className="mail">E-mail</label>
          <input
            type="text"
            className="input"
            placeholder="enter the mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <label className="mail">password</label>
          <input
            type="text"
            className="input"
            placeholder="enter the password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <br></br>
          <button type="submit" className="btn" onClick={dashboard}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
export default Login;