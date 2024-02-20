import React from "react";
import bannerImg from "../img/bannerImg.jpg";

const Banner = () => {
  return (
    <section className="overflow-hidden m-10 md:mx-40 xl:mx-80 rounded-lg shadow-2xl md:grid md:grid-cols-3">
      <img
        alt="Trainer"
        src={bannerImg}
        className="h-32 w-full object-cover md:h-full"
      />

      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest">
          Healthy Summer with Farm Fresh Mangoes
        </p>

        <h2 className="mt-6 font-black uppercase">
          <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
            Get 20% off
          </span>

          <span className="mt-2 block text-sm">On your next order over ₹1000</span>
        </h2>

        <button
          type="button"
          className=" w-full mt-8 inline-block py-4 text-sm font-bold uppercase tracking-widest  text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50  "
        >
          Buy Now
        </button>

        <p className="mt-8 text-xs font-medium uppercase text-gray-400">
          Offer valid until 24th March, 2021 *
        </p>
      </div>
    </section>
  );
};

export default Banner;
