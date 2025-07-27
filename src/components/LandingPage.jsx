import React from "react";
import animeImage from "/images/anime.jpg"; // fix this path as per your folder structure
import laImage from "/images/anime.jpg";
import nyImage from "/images/anime.jpg";
import Nav from "./Navbar/Nav.jsx"; // Import the Nav component
import "./LandingPage.css"; // Import the CSS file for styling

function LandingPage() {
  return (
  <>
    <Nav></Nav>
    <div className="landing-page">
      <h1 className="landing-heading">Welcome to Our Website</h1>
      <div className="landing-content">
        <div className="landing-card">
          <img src={animeImage} alt="Anime" className="landing-image" />
          <h2 className="landing-title">Anime</h2>
          <p className="landing-description">
            Explore the world of anime with our curated collection.
          </p>
        </div>
        <div className="landing-card">
          <img src={laImage} alt="Los Angeles" className="landing-image" />
          <h2 className="landing-title">Los Angeles</h2>
          <p className="landing-description">
            Discover the vibrant culture and attractions of Los Angeles.
          </p>
        </div>
        <div className="landing-card">
          <img src={nyImage} alt="New York" className="landing-image" />
          <h2 className="landing-title">New York</h2>
          <p className="landing-description">
            Experience the hustle and bustle of New York City.
          </p>
        </div>
      </div>
      <div className="landing-footer">
        <p className="footer-text">© 2023 Your Company Name</p>
        <p className="footer-text">All rights reserved.</p>
      </div>
    </div>
    </>
  );
}

export default LandingPage;