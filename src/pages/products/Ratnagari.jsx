import React from "react";
import coverImg from "../../img/bannerImg.jpg";

const Ratnagari = () => {
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
              fruits
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Ratnagiri Alphonso Mangos
            </h1>

            <p className="leading-relaxed my-4">
              We offer you the opportunity to taste the best quality Ratnagiri
              mangoes, grown in the Konkan region of Maharashtra. Handpicked
              with care, our mangoes are fresh, flavorful, and famous for their
              sweet, rich flavor, soft, juicy texture, and beautiful
              golden-yellow color. Grown sustainably and without harmful
              chemicals, our mangoes are a representation of the rich culture
              and tradition of Maharashtra. Come explore our website and taste
              the sweetness of nature at its best!
            </p>

            <div className="flex gap-4 items-center">
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

export default Ratnagari;
