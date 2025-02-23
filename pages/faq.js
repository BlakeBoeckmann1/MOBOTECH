import React from "react";

//INTERNAL IMPORT
import { Banner, Action } from "../components/index";

const faq = () => {
  return (
    <div>
      <Banner
        name={
          <>
            Get Your Questions Answered <br /> MOBOTECH Marketplace FAQs
          </>
        }
        childStyles={"md:text-4xl sm:text-2xl xs:text-xl text-left"}
        parentStyle={
          "justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded"
        }
      />

      <div className="flex justify-center sm:px-4 p-12">
        <div className="w-3/5 md:w-full">
          <section className="dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <h2 className="text-2xl font-semibold sm:text-2xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8 dark:text-gray-400">
                Have questions about the MOBOTECH Marketplace? Find answers here to understand our platform, its benefits, and our plans for the future.
              </p>

              <div className="space-y-4">
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                    What is the MOBOTECH Marketplace?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    The MOBOTECH Marketplace is a revolutionary platform where users can buy and sell hunting-related items and accessories using both cryptocurrency and traditional payment methods. It bridges technology with the hunting industry to create an innovative experience for users.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                    Can I buy items with both crypto and credit cards?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Yes, our marketplace allows you to purchase items using cryptocurrency (like Mobo Coin) or credit/debit cards processed via Stripe. This flexibility ensures accessibility for all users.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                    How does the MOBOTECH Marketplace ensure security?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Security is a top priority. Payments made via Stripe are processed using industry-standard encryption, and crypto transactions are conducted on secure blockchain networks like Ethereum, Polygon, and Base.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                    What can I expect from the MOBOTECH project in the future?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    We’re expanding into a full blockchain ecosystem that will include NFT integrations, staking opportunities, and conservation rewards. Our goal is to revolutionize hunting through advanced Web3 technology while supporting sustainability efforts.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                    What is Mobo Coin, and how does it work?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Mobo Coin is the cryptocurrency powering our ecosystem. It can be used to purchase items on the marketplace, participate in rewards programs, and support future blockchain-based features.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                    How can I list my items for sale on the marketplace?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    To list your items, simply create an account, connect your wallet, and use our intuitive interface to upload your products. You can choose whether to accept payments in crypto, traditional methods, or both.
                  </p>
                </details>
              </div>
            </div>
          </section>
          <Action />
        </div>
      </div>
    </div>
  );
};

export default faq;
