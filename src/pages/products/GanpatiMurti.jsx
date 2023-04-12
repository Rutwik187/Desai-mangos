import React from "react";
// import ganeshMurti from "../../img/ganeshMurti.png";
import BuyNowButtons from "../../components/BuyNowButtons";
import { ganeshImages } from "../../data";
import ganeshWithModak from "../../img/modak-real.jpg";

import ImagesSlider from "../../components/ImagesSlider";

const GanpatiMurti = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="Mango"
            className="lg:w-2/5 w-full  object-cover object-center rounded border border-gray-200"
            src={ganeshWithModak}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Murti
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Ganesh Murti
            </h1>

            <p className="leading-relaxed my-4">
              Desai Bandhu offers a wide selection of traditional handmade
              Ganesha Murtis crafted by skilled artisans using Shastrashuddha
              techniques. Customized options are also available with a variety
              of sizes, positions, and styles to choose from. Our collection
              includes revered Ganeshas such as Lalbaugcha Raja, Mandai Ganpati,
              and Shrimant Dagdusheth Halwai Ganpati. These high-quality Murtis
              are guaranteed to bring serenity, wealth, and happiness to your
              life or as a gift to someone special.
            </p>

            <h1 className="text-textColorYellow text-2xl title-font font-bold mb-1">
              Buy Now At:
            </h1>

            <BuyNowButtons />
          </div>
        </div>
        <div className="px-6 md:px-16 pt-24 mx-auto">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            Customize your Ganesh Murti
          </h1>
          <p className="leading-relaxed my-4 lg:w-4/5">
            Desai Bandhu is the place to reserve your classic Ganesh Murti.
            Ganesh Murtis come in more than 200 different variations. We employ
            trained and competent artists. At Desai Bandhu, you can now
            customise your Ganesh Murti. Specially Handcrafted Ganesh Murti of
            Shrimant Dagdusheth Halwai Ganpati, Lalbaugcha Raja , Mandai
            Ganpati, Bal Ganesh and many more
          </p>
        </div>
        <div className="px-6 md:px-16 pt-8 mx-auto">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            Mango Modak
          </h1>
          <p className="leading-relaxed my-4 lg:w-4/5 ">
            Our delicious and authentic modak is the perfect addition to your
            festivities. Made with high-quality ingredients and prepared with
            care, our modak is sure to satisfy your taste buds. Whether you're
            looking for classic or innovative flavors, we have a variety of
            options to choose from. So indulge in the goodness of our Ganpati
            modak and make your celebrations even more special!
          </p>
        </div>
        <ImagesSlider images={ganeshImages} title="" />
      </div>
    </section>
  );
};

export default GanpatiMurti;
