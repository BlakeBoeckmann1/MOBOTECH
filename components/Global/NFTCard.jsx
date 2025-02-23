import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import images from "../../public/assets/index";
import { NFTContext } from "../../context/NFTContext";
import { shortenAddress } from "../../utils/shortenAddress";

const NFTCard = ({ nft, onProfilePage, currentAccount }) => {
  const { nftCurrency, NOTIFY } = useContext(NFTContext);

  const handleClick = (e) => {
    if (!currentAccount) {
      e.preventDefault();
      NOTIFY("/wallet.png", "Wallet not connected, please connect");
    } else {
      console.log(currentAccount);
    }
  };

  return (
    <Link
      href={currentAccount ? { pathname: "/nft-details", query: nft } : "#"}
      passHref
    >
      <a onClick={handleClick}>
        <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:mx-2 cursor-pointer shadow-md">
          <div className="relative w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
            {nft.category == "Image" ? (
              <Image
                src={nft.image || images[`nft${nft.i}`]}
                layout="fill"
                objectFit="cover"
                alt="nft01"
              />
            ) : nft.category == "Audio" ? (
              <>
                <Image
                  src={images.wave}
                  layout="fill"
                  objectFit="cover"
                  alt="nft01"
                />
                <audio controls className="createPagePlayer">
                  <source src={nft.image} type="audio/ogg" />
                  <source src={nft.image} type="audio/mpeg" />
                  Your browser does not support the audio tage
                </audio>
              </>
            ) : (
              <video
                src={nft.image}
                width={"560"}
                height={"315"}
                color="#053f14"
                className="createPageVideo"
                controls
              ></video>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
              {nft.name}
            </p>
            <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
              <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">
                {nft.price}
                {""}
                <span className="font-normal">{nftCurrency}</span>
              </p>
              <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">
                {shortenAddress(nft.seller)}
              </p>
            </div>

            <div className="mt-1 minlg:mt-3 flexBetween flex-row" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NFTCard;
