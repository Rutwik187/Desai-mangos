import React from "react";
import bannerImg from "../img/bannerImg.jpg";
import since from "../img/since.svg";
import agriculture from "../img/agriculture.svg";
import certification from "../img/certificate.svg";
import choice from "../img/varities.svg";
import farm from "../img/farm.svg";
import onlineOrder from "../img/online-order.svg";
import support from "../img/customer-service.svg";
const WhyChooseUs = () => {
  return (
    <div className="container my-6 md:my-24  px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl  tracking-tight font-semibold text-gray-900 ">
          Why Choose Us
        </h2>

        <div className="flex flex-wrap items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              style={{ backgroundPosition: "50%" }}
            >
              <img src={bannerImg} className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                ></div>
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
            <div className="flex mb-12">
              <div className="shrink-0">
                <div
                  className="p-4 rounded-md shadow-lg"
                  style={{ backgroundColor: "#FCA61F" }}
                >
                  <img className="w-5 h-5 text-white" src={since} alt="" />
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1"> Intact since 1932: </p>
                <p className="text-gray-500">
                  We are in service since 1932, which is still going strong, is
                  a testimonial to the excellence of our products and the
                  confidence our clients have in us.
                </p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="shrink-0">
                <div
                  className="p-4 rounded-md shadow-lg"
                  style={{ backgroundColor: "#FCA61F" }}
                >
                  <img
                    className="w-5 h-5"
                    src={agriculture}
                    alt="agriculture"
                  />
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1">
                  Sustainable agricultural methods
                </p>
                <p className="text-gray-500">
                  We adhere to sustainable agricultural methods and take great
                  effort to ensure that our mangoes are free of damaging
                  pesticides and chemicals.
                </p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="shrink-0">
                <div
                  className="p-4 rounded-md shadow-lg"
                  style={{ backgroundColor: "#FCA61F" }}
                >
                  <img
                    className="w-5 h-5"
                    src={certification}
                    alt="certification"
                  />
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1">GI certification</p>
                <p className="text-gray-500">
                  . We hold GI certification, which indicates that our mangoes
                  are grown in particular areas and have distinctive qualities
                  that set them apart from other types.
                </p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="shrink-0">
                <div
                  className="p-4 rounded-md shadow-lg"
                  style={{ backgroundColor: "#FCA61F" }}
                >
                  <img className="w-5 h-5" src={choice} alt="choice" />
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1">
                  Vast selection of mango varieties
                </p>
                <p className="text-gray-500">
                  We have three types of mangoes - Devgad, Ratnagiri, and Pawas
                  - and our specialty is the Amrut Pairi kind. There is
                  something here for every taste.
                </p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="shrink-0">
                <div
                  className="p-4 rounded-md shadow-lg"
                  style={{ backgroundColor: "#FCA61F" }}
                >
                  <img className="w-5 h-5" src={farm} alt="farm" />
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1">Farm-to-table philosophy: </p>
                <p className="text-gray-500">
                  We take great effort to make sure that our mangoes are brought
                  straight from our gardens to your table, making sure that you
                  only get the freshest and most flavourful produce.
                </p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="shrink-0">
                <div
                  className="p-4 rounded-md shadow-lg"
                  style={{ backgroundColor: "#FCA61F" }}
                >
                  <img
                    className="w-5 h-5"
                    src={onlineOrder}
                    alt="onlineOrder"
                  />
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1">Online ordering :</p>
                <p className="text-gray-500">
                  We provide online ordering and global delivery so that our
                  customers can take advantage of the sweetness of nature
                  whenever it's convenient for them.
                </p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="shrink-0">
                <div
                  className="p-4 rounded-md shadow-lg"
                  style={{ backgroundColor: "#FCA61F" }}
                >
                  <img className="w-5 h-5" src={support} alt="support" />
                </div>
              </div>
              <div className="grow ml-4">
                <p className="font-bold mb-1">Customer service: </p>
                <p className="text-gray-500">
                  We take great pleasure in providing excellent customer service
                  and are dedicated to making sure that every interaction with
                  us is positive for our clients. Our helpful and educated team
                  is always available to answer your questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
