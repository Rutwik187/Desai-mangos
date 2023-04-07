import React from "react";
import faralFull from "../../img/faral-full.jpg";

const Faral = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="Mango"
            className="lg:w-2/5 w-full  object-cover object-center rounded border border-gray-200"
            src={faralFull}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Snacks
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              faralFull
            </h1>

            <p className="leading-relaxed my-4">
              At Desai Bandhu, we specialize in serving up traditional and
              authentic Diwali faral that captures the true essence of Indian
              celebrations. Our meticulously made Chakli, Besan Laddoo, Poha
              Chivda, Shankarpali, Shev, Karanji, Anarse, and more are made with
              only the highest quality ingredients and traditional cooking
              techniques. We also offer a Traditional Diwali Faral Daba and
              other special Diwali products. We offer door delivery across India
              and to select countries. Celebrate Diwali with us and experience
              the true flavors of India. Shop now on our website.
            </p>

            <h1 className="text-textColorYellow text-2xl title-font font-bold mb-1">
              Buy Now At:
            </h1>

            <div className="flex gap-4 items-center">
              <a href="https://wa.me/c/919850000093">
                <button
                  type="button"
                  className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
                >
                  Baner
                </button>
              </a>
              <a href="https://wa.me/c/919850000093">
                <button
                  type="button"
                  className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
                >
                  Karve Road
                </button>
              </a>
              <a href="https://wa.me/c/919021538564">
                <button
                  type="button"
                  className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 p-3 font-medium rounded-lg text-sm ppy-2 px-6 text-center inline-flex items-center justify-center"
                >
                  Shanipar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faral;
