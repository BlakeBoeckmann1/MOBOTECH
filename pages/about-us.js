import React from "react";

// INTERNAL IMPORT
import { Banner, Action } from "../components/index";

const aboutUs = () => {
  return (
    <div>
      <Banner
        name={
          <>
            Welcome to MOBOTECH<br /> The Future of Hunting and Technology
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
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#053f14]">
                    <h3 className="text-3xl font-semibold">MOBOTECH</h3>
                    <span className="text-sm font-bold uppercase dark:text-gray-400">
                      The World’s First Hunting NFT Marketplace
                    </span>
                  </div>
                </div>

                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                    {/* //1 */}
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:top-1 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#053f14]">
                      <h3 className="text-xl font-semibold">
                        Built for Hunters, by Hunters
                      </h3>
                      <time className="text-xs uppercase dark:text-green-400">
                        January 2024
                      </time>

                      <p className="mt-3">
                        MOBOTECH is the world’s first NFT marketplace designed exclusively for hunters. Whether you're buying or selling gear, trading digital hunting collectibles, or minting your own hunting-focused NFTs, MOBOTECH is tailored to meet your needs. This platform bridges the gap between cutting-edge technology and the hunting lifestyle, creating opportunities for hunters to explore, connect, and thrive in the digital age.
                      </p>
                    </div>

                    {/* //2 */}
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:top-1 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#053f14]">
                      <h3 className="text-xl font-semibold">
                        Become a Vendor and Thrive
                      </h3>
                      <time className="text-xs uppercase dark:text-green-400">
                        February 2024
                      </time>

                      <p className="mt-3">
                        Are you a gear manufacturer, custom call maker, or artist specializing in outdoor themes? MoboTech offers you a marketplace to showcase your creations to a global audience of hunters. Our vendor-friendly platform allows you to list, sell, and grow your business while tapping into a thriving community of outdoor enthusiasts. This is your chance to turn passion into profit and grow with the future of the hunting market.
                      </p>
                    </div>

                    {/* //3 */}
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:top-1 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#053f14]">
                      <h3 className="text-xl font-semibold">
                        The Future of Hunting is Here
                      </h3>
                      <time className="text-xs uppercase dark:text-green-400">
                        March 2024
                      </time>

                      <p className="mt-3">
                        MOBOTECH isn’t just a marketplace; it’s a movement. By integrating blockchain technology, smart contracts, and decentralized storage, we are paving the way for the next evolution of hunting. Whether you're buying gear, connecting with fellow hunters, or exploring hunting NFTs, MOBOTECH provides a seamless, secure, and innovative platform. This isn’t just the future—it’s the future you can be a part of today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Action />
        </div>
      </div>
    </div>
  );
};

export default aboutUs;