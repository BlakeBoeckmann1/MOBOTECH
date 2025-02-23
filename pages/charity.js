import React, { useState, useContext, useEffect } from "react";

//INTERNAL IMPORT
import { Button, Banner, Input, GlobalLoader } from "../components/index";
import { NFTContext } from "../context/NFTContext";

const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;

const conservation = () => {
  const {
    donate,
    donationBalance,
    allDonorList,
    currentAccount,
    INITIAL_DONATION,
    connectWallet,
  } = useContext(NFTContext);

  const [donationAmount, setDonationAmount] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const loadNFTs = async () => {
      if (!currentAccount) return;

      try {
        setLoader(true);
        const items = await INITIAL_DONATION();

        setLoader(false);
      } catch (error) {
        console.log("Failed to fetch NFTs", error);
      } finally {
        setLoader(false);
      }
    };
    loadNFTs();
  }, [currentAccount]);

  const callFunction = async () => {
    await donate(donationAmount);
  };

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <Banner
          name={
            <>
              Contribute to Conservation <br /> Efforts with MoboTech
            </>
          }
          childStyles={"md:text-4xl sm:text-2xl xs:text-xl text-left"}
          parentStyle={
            "justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded"
          }
        />

        <div className="mt-7 w-full flex flex-wrap justify-start md:justify-center gap-x-5">
          {currentAccount ? (
            <Button
              btnName={`Total Donation: ${donationBalance} ${CURRENCY}`}
              btnType={"primary"}
              classStyle={"rounded mt-4 sm:mt-4"}
            />
          ) : (
            <Button
              btnName={`Connect Wallet`}
              btnType={"primary"}
              classStyle={"rounded mt-4 sm:mt-4"}
              handleClick={() => connectWallet()}
            />
          )}
        </div>

        <Input
          inputType={"number"}
          title={"Donation Amount"}
          placeholder={"Enter amount"}
          cryptoToken={"ETH"}
          handleClick={(e) => setDonationAmount(e.target.value)}
        />
        {currentAccount && (
          <div className="mt-7 w-full flex justify-end">
            <Button
              btnName={"Donate Now"}
              btnType={"primary"}
              classStyle={"rounded"}
              handleClick={() => callFunction()}
            />
          </div>
        )}

        {/* //DETAIL OF THE CONSERVATION EFFORTS SECTION */}

        <section className="dark:text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#053f14]">
                  <h3 className="text-3xl font-semibold">Support Conservation</h3>
                  <span className="text-sm font-bold tracking uppercase dark:text-gray-400">
                    Protecting Wildlife and Natural Habitats
                  </span>
                </div>
              </div>

              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  {/* //1 */}
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:top-1 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#053f14]">
                    <h3 className="text-xl font-semibold tracking">
                      Preserving Biodiversity for Future Generations
                    </h3>
                    <time className="text-xs tracking uppercase dark:text-green-400">
                      Jan 2025
                    </time>

                    <p className="mt-3">
                      Your donation helps to protect endangered species and the natural habitats they rely on. By supporting conservation efforts, we contribute to a healthier planet for future generations.
                    </p>
                  </div>

                  {/* //2 */}
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:top-1 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#053f14]">
                    <h3 className="text-xl font-semibold tracking">
                      Combating Climate Change Through Preservation
                    </h3>
                    <time className="text-xs tracking uppercase dark:text-green-400">
                      Jan 2025
                    </time>

                    <p className="mt-3">
                      Climate change poses a major threat to ecosystems across the globe. Your contribution helps fund efforts to preserve critical ecosystems that are vital for combating climate change.
                    </p>
                  </div>

                  {/* //3 */}
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:top-1 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#053f14]">
                    <h3 className="text-xl font-semibold tracking">
                      Aiding in Habitat Restoration Efforts
                    </h3>
                    <time className="text-xs tracking uppercase dark:text-green-400">
                      Jan 2025
                    </time>

                    <p className="mt-3">
                      Many habitats around the world have been destroyed due to deforestation, pollution, and human activity. Your donation helps fund restoration projects that aim to bring these habitats back to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {loader && <GlobalLoader />}
    </div>
  );
};

export default conservation;