import React, { useState } from "react";
import "./testi.css";
// Import your MP4 files
import video1 from "./testi/a.mp4";
import video2 from "./testi/2.mp4";
import video4 from "./testi/4.mp4";

const videoStyle = {
  width: "80%",   
  maxWidth: "400px", 
  height: "auto",    
  borderRadius: "8px", 
};

const videoTestimonials = [
  {
    src: video1,
    name: "Jesper Norgaard Modvig",
    country: "Netherlands",
  },
  {
    src: video2,
    name: "Slimen",
    country: "Algeria",
  },
  {
    src: video4,
    name: "Zehra nur kizil",
    country: "Turkey",
  },
];

const Testi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials-container" id="testimonials">
      {/* Header */}
      <div className="testimonials-header">
        <h4>TESTIMONIALS</h4>
        <h2>What People Say About Us.</h2>
      </div>

      {/* Carousel */}
      <div className="testimonials-carousel">
        <button className="carousel-btn prev" onClick={goToPrev}>
          &#10094;
        </button>

        <div className="testimonial-card">
          {/* 2) Display name & country above the video */}
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#f2f2f2",
              padding: "0.5rem",
              borderRadius: "8px",
              marginBottom: "0.5rem",
            }}
          >
            <h3 style={{ margin: 0 , fontSize: "25px" }}>
              {videoTestimonials[currentIndex].name}
            </h3>
            <p style={{ margin: 0, color: "#666", fontSize: "19px", fontWeight: "600" }}>
             {videoTestimonials[currentIndex].country}
            </p>
          </div>

          {/* Video */}
          <video
            key={currentIndex}
            src={videoTestimonials[currentIndex].src}
            controls
            style={videoStyle}
            // autoPlay
            // loop
            // muted
          />
        </div>

        <button className="carousel-btn next" onClick={goToNext}>
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="testimonials-navigation">
        {videoTestimonials.map((_, index) => (
          <span
            key={index}
            className={`nav-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testi;
