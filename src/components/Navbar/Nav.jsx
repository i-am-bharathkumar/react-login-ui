import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();

  // Track login status using localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Check on mount in case localStorage changes elsewhere
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedLogin);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Left links */}
        <div className="navbar-nav">
          <div
            className="navbar-brand"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            React Login UI
          </div>
          {isLoggedIn && (
            <Link to="/database" className="nav-link">
              Database
            </Link>
          )}
        </div>

        {/* Right side: search + auth buttons */}
        <div className="nav-search-auth">
          <input
            type="text"
            className="nav-search-input"
            placeholder="Search..."
          />
          <button className="nav-btn search-btn">Search</button>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-btn">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="nav-btn">
                Login
              </Link>
              <Link to="/register" className="nav-btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;