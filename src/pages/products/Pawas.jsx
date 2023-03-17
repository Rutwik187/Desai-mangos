import React from "react";
import coverImg from "../../img/bannerImg.jpg";

const Pawas = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="Mango"
            className="lg:w-2/5 w-full  object-cover object-center rounded border border-gray-200"
            src={coverImg}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Fruits
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Pawas Alphonso
            </h1>

            <p className="leading-relaxed my-4">
              Try the rare and special variety of Pawas mangoes, grown
              exclusively in the coastal region of Maharashtra. Handpicked for
              maximum freshness and flavor, Pawas mangoes are known for their
              distinct aroma, rich flavor, and juicy texture. Grown sustainably
              and without harmful chemicals, we take pride in providing you with
              only the best quality Pawas mangoes. Choose from our selection of
              Pawas mangoes for snacking, refreshing beverages, or your favorite
              recipes. Taste the authentic and natural flavor of these mangoes
              and enjoy the sweetness of nature at its best!
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                type="button"
                className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
              >
                Shanipar
              </button>
              <button
                type="button"
                className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
              >
                Karve Road
              </button>
              <button
                type="button"
                className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
              >
                Baner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pawas;
