import React from "react";

const BuyNowButtons = ({ item }) => {
  const whatsAppUrl = `Thank%20you%20for%20your%20${item}%20order%20from%20Desai%20Bandhu%20Mangoes!%20Hope%20you%20love%20them!
`;

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
