import React, { useContext } from "react";
import { NFTContext } from "../../context/NFTContext";
import Button from "./Button";

const Action = () => {
  const { connectWallet, currentAccount } = useContext(NFTContext);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");

        .button-container {
          position: relative;
          margin-top: 20px;
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

        @media (max-width: 768px) {
          .container {
            padding: 20px;
            text-align: center;
          }

          .button-container {
            margin-top: 30px;
          }

          .button-container a {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .title-font {
            font-size: 2rem;
          }

          .text-sm {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="rounded-xl mt-6 mb-6 py-6 bg-[#053f14] dark:text-gray-50">
        <div className="container mx-auto flex flex-col justify-center items-center text-center p-4 md:p-10">
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-medium uppercase text-[#fff]">
              THE FIRST CRYPTO HUNTING MARKETPLACE
            </p>
            <h1 className="py-2 text-4xl font-medium title-font text-[#fff]">
              MOBOTECH
            </h1>
          </div>

          <div className="mt-4 max-w-lg">
            <p className="text-sm font-medium text-[#fff] leading-relaxed">
              Welcome to the Mobotech Marketplace – where technology and hunting
              converge. Explore and engage in the most innovative platform for
              hunters and crypto enthusiasts alike.
            </p>
          </div>

          <div className="button-container mt-4">
            {currentAccount ? (
              <Button
                btnName="Create"
                btnType="primary"
                classStyle="mx-2 rounded"
                handleClick={() => {
                  window.location.href = "/create-nft";
                }}
              />
            ) : (
              <Button
                btnName="Connect Wallet"
                btnType="outline"
                classStyle="mx-2 rounded"
                handleClick={connectWallet}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Action;