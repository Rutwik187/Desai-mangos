import React from "react";

const BuyNowButtons = ({ item }) => {
  const whatsAppUrl = `Hello%21%20I%20would%20like%20to%20order%20${item}.%20Please%20confirm%20availability%20and%20price.`;
  return (
    <div className="flex gap-4 items-center">
      <a href={`https://wa.me/919021538564/?text=${whatsAppUrl}`}>
        <button
          type="button"
          className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
        >
          Shanipar
        </button>
      </a>
      <a href={`https://wa.me/919850000093/?text=${whatsAppUrl}`}>
        <button
          type="button"
          className="w-full text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
        >
          Karve Road
        </button>
      </a>
      <a href={`https://wa.me/919850000093/?text=${whatsAppUrl}`}>
        <button
          type="button"
          className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
        >
          Baner
        </button>
      </a>
    </div>
  );
};

export default BuyNowButtons;
