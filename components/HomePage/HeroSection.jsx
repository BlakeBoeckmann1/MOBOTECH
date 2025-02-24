import React from "react";
import { useRouter } from 'next/router';  // Import useRouter hook
import Image from 'next/image';

const Hero = () => {
  return (
    <div id="home" className="flat-pages-title-home2 relative">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
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
            “Welcome to MOBOTECH: The Future of Hunting and Digital Innovation.”
            Join the next evolution in hunting. MOBOTECH empowers hunters, gear
            makers, and tech enthusiasts to buy, sell, and trade hunting gear and
            exclusive NFTs. List your products, connect with a global community,
            and earn rewards in the process. Whether you’re a vendor or a
            collector, MOBOTECH is your gateway to the digital frontier of hunting.
          </p>
        </div>

        <img src="assets/hero-image.png" alt="Hero Section" />

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
        src="assets/buy.png" // Ensure the path is correct
        alt="Logo"
        className="logo"
      />

      {/* Custom Styles */}
      <style jsx global>{`
        /* Import the Orbitron font */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

        /* Video Background */
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
        }

        /* Hero Section Content */
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

        /* Adjusted Image Box Position */
        .hero-content img {
          max-width: 600px;
          height: 500px;
          border-radius: 50px;
          position: absolute;
          left: calc(50% + 6in); /* Move 6 inches to the right */
          top: calc(50% - 1.5in); /* Move 2 inches up */
          transform: translate(-50%, -50%);
        }

        /* Adjusted Text Box Position */
        .hero-content h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
          position: absolute;
          left: calc(50% - 4.2in); /* Move 2 inches to the left */
          top: calc(50% - 2in); /* Move 1 inch down */
          transform: translate(-50%, -50%);
          font-family: 'Orbitron', sans-serif; /* Apply Orbitron font */
        }

        /* Box Containing the New Text */
        .text-box {
          width: 6in; /* 6 inches wide */
          height: 2.5in; /* 2.5 inches tall (you can adjust to 2 or 3 inches if you prefer) */
          display: flex;
          justify-content: flex-start; /* Align text to the left */
          align-items: flex-start; /* Align content to the top */
          background-color: rgba(0, 0, 0, 0.0); /* Slightly transparent background */
          border-radius: 8px;
          padding: 10px;
          position: absolute;
          left: calc(50% - 6in); /* Center horizontally with 6in width */
          top: calc(50% - 1.5in); /* Adjust positioning as necessary */
        }

        /* Smaller Text Inside the Box */
        .hero-subtext {
          font-size: 1rem; /* Smaller font size */
          color: white;
          text-align: left; /* Align the text to the left */
          font-family: 'Orbitron', sans-serif; /* Apply Orbitron font */
        }

        /* Logo Styling */
        .logo {
          position: absolute;
          top: 20px; /* Position logo 20px from the top */
          left: 335px; /* Position logo 20px from the left */
          width: 150px; /* Adjust the width of the logo */
          height: auto;
          z-index: 2; /* Make sure it stays on top */
        }

        /* Parent container for the hero section */
        .flat-pages-title-home2 {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        /* Button Container */
        .button-container {
          position: absolute; /* Absolute positioning for custom placement */
          top: calc(50% + 1in); /* Move 2 inches down */
          left: calc(50% - 3in); /* Move 2 inches to the left */
          transform: translate(-50%, -50%); /* Center the buttons */
          margin-top: 0; /* Remove default margin for consistent positioning */
          display: flex;
          justify-content: center;
        }

        .button-container a {
          margin: 0 10px;
          padding: 14px 28px; /* Default padding for computer layout */
          font-size: 1rem;
        }

        /* Responsive Styles for iPhone */
        @media (max-width: 768px) {
          .button-container {
            position: static; /* Remove absolute positioning for simplicity */
            top: auto;
            left: auto;
            transform: none; /* Reset transform */
            margin-top: 20px; /* Add margin for spacing */
          }

          .button-container a {
            padding: 10px 20px; /* Smaller padding for iPhone layout */
            font-size: 0.9rem; /* Adjust font size for smaller screens */
          }
        }

        /* Responsive Styles for iPhone */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 1.5rem; /* Smaller font for iPhone */
            position: static; /* Remove absolute positioning for simplicity */
            margin-bottom: 20px;
          }

          .hero-content img {
            max-width: 90%;
            height: auto;
            position: relative; /* Remove absolute positioning */
            margin: 0 auto; /* Center image */
          }

          .text-box {
            width: 90%; /* Make the text box fit the screen width */
            height: 50px; /* Adjust height dynamically */
            padding: 0px;
            position: static; /* Remove absolute positioning */
            margin: 0 auto; /* Center the box */
          }

          .hero-subtext {
            font-size: 0.9rem; /* Slightly smaller text */
          }

          .logo {
            width: 80px; /* Adjust logo size for smaller screens */
            top: 30px;
            left: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;