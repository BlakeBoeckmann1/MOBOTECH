import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      {/* Video Background */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source src="/assets/tennesse.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Image Background */}
      <div className="image-container">
        <img src="/assets/hero-image.jpg" alt="Hero" className="hero-image" />
      </div>

     {/* Grouped Content Box */}
     <div className="content-box">
        <img src="/assets/buy.png" alt="Logo" className="logo" />
        <h1 className="mobotex-text">MOBOTECH</h1>
        <a href="/buy-decoy" className="decoy-box">
          <p>BUY DECOY</p>
        </a>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow:hidden
        }

        .video-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2; /* Image stays behind the video */
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.);
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          color: white;
          z-index: 1;
          width: auto;
        }

        .logo {
          width: 350px;
          margin-bottom: 10px;
        }

        .mobotex-text {
          font-size: 2rem;
          font-family: 'Orbitron', sans-serif;
          margin-bottom: 10px;
        }

        .decoy-box {
          background-color: #053f14;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .logo {
            width: 200px;
          }

          .mobotex-text {
            font-size: 1.5rem;
          }

          .decoy-box {
            font-size: 1.2rem;
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;