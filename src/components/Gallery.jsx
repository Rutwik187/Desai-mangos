import React from "react";
import ZoomGallery from "./ZoomGallery";
import rajThakre from "../img/raj-thakre.jpeg";
import amitabhBacchan from "../img/amitabhBachan.jpeg";
import dhoni from "../img/dhoni.jpeg";
import ImagesSlider from "./ImagesSlider";
import Instagram from "./Instagram";

import { celebs, socialWork } from "../data";

const Gallery = () => {
  return (
    <section class="overflow-hidden pt-20 pb-12 lg:pt-[60px] lg:pb-[90px] md:mx-24 mx-6">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap items-center justify-between">
          <div class="w-full px-4 lg:w-6/12 -z-10">
            <div class="-mx-3 flex items-center sm:-mx-4">
              <div class="w-full px-3 sm:px-4 xl:w-1/2 -z-10">
                <div class="py-3 sm:py-4">
                  <img
                    src={rajThakre}
                    alt=""
                    class="w-full rounded-2xl float-animation shadow-lg"
                  />
                </div>
                <div class="py-3 sm:py-4">
                  <img
                    src={dhoni}
                    alt=""
                    class="w-full rounded-2xl float-animation shadow-lg"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="relative z-10 my-4 ">
                  <img
                    src={amitabhBacchan}
                    alt=""
                    class="w-full rounded-2xl float-animation shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div class="mt-10 lg:mt-0">
              {/* <span class="text-textColorYellow mb-2 block text-lg font-semibold">
                Celebrities who love our mangoes
              </span> */}
              <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                Celebrities who love our mangoes
              </h2>
              <p class="text-body-color mb-8 text-base">
                Our commitment to excellence has allowed us to grow and expand
                over the years, and we are proud to offer our products to
                customers across the country. One of our proudest moments was
                when we had the opportunity to meet and gift a basket of our
                finest mangoes to some of the very legendary personalities.
              </p>
              <p class="text-body-color mb-12 text-base">
                Few of them are Hon. Nitinji Gadkari, Hon. Devendraji Fadnavis,
                Hon. Chandrakant dada Patil, Hon. Raj Saheb Thackeray, Shri.
                Amitabhji Bachchan, Shri M.S.Dhoni...
              </p>
              <p class="text-body-color mb-12 text-base">
                We are also glad to receive apprication letters from former
                Prime Minister Indira Gandhi,Shri. Amitabhji Bachchan,Hon.
                Nitinji Gadkari, Hon. Devendraji Fadnavis...
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZoomGallery />
      <ImagesSlider images={celebs} title="Politician" />
      <ImagesSlider images={socialWork} title="Social Work" />
      <Instagram />
    </section>
  );
};

export default Gallery;
