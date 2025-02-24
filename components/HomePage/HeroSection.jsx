import React from "react";

const Hero = () => {
  return (
    <div id="home" className="flat-pages-title-home2 relative">
      {/* Video Background */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none", // Prevents clicking/tapping from affecting the video
          }}
        >
          <source src="/assets/tennesse.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <h1>MOBOTECH</h1>

        {/* Box Containing the New Text */}
        <div className="text-box">
          <p className="hero-subtext">
         
          </p>
        </div>

        <img src="/assets/hero-image.png" alt="Hero Section" />

        {/* Buttons */}
        <div className="button-container mt-8 space-x-4">
          <a
            href="/buy-decoy"
            className="px-6 py-3 bg-green-800 text-white rounded-lg text-lg"
          >
            Buy Decoy
          </a>
        </div>
      </div>

      {/* Logo */}
      <img
        src="/assets/buy.png"
        alt="Logo"
        className="logo"
      />

      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .video-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .hero-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          z-index: 1;
          padding: 20px;
        }

        .hero-content img {
          max-width: 600px;
          height: 500px;
          border-radius: 50px;
          position: absolute;
          left: calc(50% + 6in);
          top: calc(50% - 1in);
          transform: translate(-50%, -50%);
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
          position: absolute;
          left: calc(50% - 2.3in);
          top: calc(50% - 0in);
          transform: translate(-50%, -50%);
          font-family: 'Orbitron', sans-serif;
        }

        .text-box {
          width: 6in;
          height: 3.5in;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          background-color: rgba(0, 0, 0, 0.0);
          border-radius: 8px;
          padding: 10px;
          position: absolute;
          left: calc(50% - 4in);
          top: calc(50% - 5.5in);
        }

        .hero-subtext {
          font-size: 1rem;
          color: white;
          text-align: left;
          font-family: 'Orbitron', sans-serif;
        }

        .logo {
          position: absolute;
          top: 55px;
          left: 525px;
          width: 250px;
          height: auto;
          z-index: 2;
        }

        .flat-pages-title-home2 {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .button-container {
          position: absolute;
          top: calc(50% + 1in);
          left: calc(50% - 2.4in);
          transform: translate(-50%, -50%);
          margin-top: 0;
          display: flex;
          justify-content: center;
        }

        .button-container a {
          margin: 0 110px;
          padding: 10px 28px;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .button-container {
            position: absolute;
            top: 410px;
            left: 34px;
            transform: none;
            margin-top: 10px;
            
          }
             @media (max-width: 768px) {
          .hero-content h1 {
            font-size:2rem;
            position: absolute;
            top: 550px;
            left: 50px;
            transform: none;
            margin-top: 400px;
            
          }

          .button-container a {
            padding: 5px 20px;
            font-size: 0.9rem;
          }

          .hero-content h1 {
            font-size: 1.5rem;
            position: static;
            margin-bottom: 0px;
          }

          .hero-content img {
            max-width: 90%;
            height: auto;
            position: relative;
            margin: 0 auto;
          }

          .text-box {
            width: 90%;
            height: 20px;
            padding: 10px;
            position: static;
            margin: auto ;
          }

          .hero-subtext {
            font-size: 0.9rem;
          }

          .logo {
            width: 180px;
            top: 155px;
            left: 110px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;