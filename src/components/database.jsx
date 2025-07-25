import React, { useEffect, useState } from "react";
import "./database.css";
import { useNavigate } from "react-router-dom";

function Database() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="database-container">
      <h1 className="database-heading">Database Connection</h1>
      <h2>Database Users</h2>
      <div className="user-list">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Database;