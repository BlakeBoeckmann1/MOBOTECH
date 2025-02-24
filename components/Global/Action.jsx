import React from "react";

const Action = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

        /* Custom Styles */
        .button-container {
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .button-container a {
          display: inline-block;
          background-color: #ffcc00;
          color: #000;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          border-radius: 8px;
        }

        .button-container a:hover {
          background-color: #ffaa00;
        }

        /* Mobile-Specific Adjustments */
        @media (max-width: 768px) {
          .button-container {
            top: 80%; /* Adjust this to move the button */
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .button-container a {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="rounded-xl mt-12 mb-12 py-6 bg-[#053f14] dark:text-gray-50">
        <div className="container mx-auto flex sm:flex-col md:flex-col flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium tracki uppercase text-[#fff]">
              THE FIRST CRYPTO HUNTING MARKETPLACE
            </p>
            <h1 className="py-2 text-3xl font-medium leadti title-font text-[#fff]">
              MOBOTECH 
            </h1>
          </div>

          {/* New Text Section under the marketplace title */}
          <div className="flex flex-col justify-center lg:text-left mt-6 space-y-4 sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end sm:grid sm:gap-2">
            <p className="text-sm font-medium text-[#fff]">
              Welcome to the Mobotech Marketplace – where technology and hunting converge. Explore and engage in the most innovative platform for hunters and crypto enthusiasts alike.
            </p>
          </div>
        </div>

        
      </section>
    </>
  );
};

export default Action;

