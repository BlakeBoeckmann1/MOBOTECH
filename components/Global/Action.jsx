import React from "react";

// INTERNAL IMPORT
// Removed Google and Apple imports as we're not using them now

const Action = () => {
  return (
    <section className="rounded-xl mt-12 mb-12 py-6 bg-[#053f14] dark:text-gray-50">
      <div className="container mx-auto flex sm:flex-col md:flex-col flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
        <div className="flex flex-col justify-center lg:text-left">
          <p className="mb-1 text-sm font-medium tracki uppercase text-[#fff]">
            THE WORLDS FIRST CRYPTO HUNTING MARKETPLACE
          </p>
          <h1 className="py-2 text-3xl font-medium leadti title-font text-[#fff]">
            MOBOTECH Marketplace
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
  );
};

export default Action;
