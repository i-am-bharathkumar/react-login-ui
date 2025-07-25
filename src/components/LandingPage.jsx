import React from "react";
import animeImage from "/images/anime.jpg"; // fix this path as per your folder structure
import laImage from "/images/anime.jpg";
import nyImage from "/images/anime.jpg";
import Nav from "./Nav";

function LandingPage() {
  return (
  <>
    <Nav></Nav>
    <div className="container mt-4">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={laImage} className="d-block w-100" alt="Los Angeles" />
            <h1>welcome</h1>
          </div>
          <div className="carousel-item">
            <img src={animeImage} className="d-block w-100" alt="Anime" />
          </div>
          <div className="carousel-item">
            <img src={nyImage} className="d-block w-100" alt="New York" />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
