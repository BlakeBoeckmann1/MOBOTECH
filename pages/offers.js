import React from "react";

//IMPORT INTERNAL
import { Banner, Services } from "../components/index";
import images from "../public/assets";

const offers = () => {
  const offerList = [
    {
      offer: "NFT Auction",
      image: images.nft,
      link: "/nft-auction",
    },
    
    {
      offer: "Token Sale",
      image: images.stacking,
      link: "/token-sale",
    },
    
    {
      offer: "Community",
      image: images.community,
      link: "/community",
    },
  ];
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4.2/5">
        <Banner
          name={
            <>
              {" "}
              Pick Your Offer, <br /> MoboTech{" "}
            </>
          }
          childStyles={"md:text-4xl sm:text-2xl xs:text-xl text-left"}
          parentStyle={
            "justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-xl"
          }
        />

        <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
          {offerList.map((el, i) => (
            <Services serviceList={el} key={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default offers;
