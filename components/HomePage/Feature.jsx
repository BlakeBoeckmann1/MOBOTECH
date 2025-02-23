import React from "react";

//INTERNAL IMPORT
import { Tick } from "../index";

const Feature = () => {
  return (
    <section className="rounded-xl mt-36 mb-36 bg-[#1a1a1a] dark:text-gray-100">
      <div className="container mx-auto text-center mb-10">
        {/* Header Text */}
        <h2 className="text-3xl font-bold text-white">
          Step by step create and sell your NFTs
        </h2>
        <p className="text-gray-300 mt-2">
          Follow these simple steps to kickstart your NFT journey.
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Box 1 */}
        <div className="flex flex-col justify-start items-start p-6 m-4 bg-[#333333] rounded-lg w-[23%] sm:w-full">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="assets/icon-01.png"
              alt="Icon 1"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Set Up Your Wallet
          </h3>
          <p className="text-sm text-gray-300 leading-6">
            Prepare your wallet to start using the platform
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col justify-start items-start p-6 m-4 bg-[#333333] rounded-lg w-[23%] sm:w-full">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="assets/icon-02.png"
              alt="Icon 2"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Create Collection
          </h3>
          <p className="text-sm text-gray-300 leading-6">
            Organize and manage your NFTs by creating a collection
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col justify-start items-start p-6 m-4 bg-[#333333] rounded-lg w-[23%] sm:w-full">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="assets/icon-03.png"
              alt="Icon 3"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Add your NFTs
          </h3>
          <p className="text-sm text-gray-300 leading-6">
            Upload and showcase your NFTs in your collection
          </p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col justify-start items-start p-6 m-4 bg-[#333333] rounded-lg w-[23%] sm:w-full">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="assets/icon-04.png"
              alt="Icon 4"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Sell your NFTs
          </h3>
          <p className="text-sm text-gray-300 leading-6">
            List your NFTs for sale and connect with buyers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
