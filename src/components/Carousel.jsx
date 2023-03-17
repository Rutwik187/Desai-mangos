import React from "react";
import { Carousel } from "flowbite";

import homeGalleryImg1 from "../img/homeGallery1.jpg";
import homeGalleryImg2 from "../img/homeGallery2.jpg";
// import homeGalleryImg3 from "../img/homeGallery3.jpg";
import homeGalleryImg4 from "../img/homeGallery4.jpg";
import homeGalleryImg5 from "../img/homeGallery5.jpg";

const CarouselCompo = () => {
  return (
    <div
      id="controls-carousel"
      className="relative w-[80%] mx-auto"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[90vh]">
        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in " data-carousel-item>
          <img
            src={homeGalleryImg1}
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="fake img"
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src={homeGalleryImg2}
            alt="..."
            className="absolute block w-full h-full object-cover  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        {/* <!-- Item 3 --> */}
        {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={homeGalleryImg3}
            alt="..."
            className="absolute block w-full h-full object-cover  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div> */}
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={homeGalleryImg4}
            alt="..."
            className="absolute block w-full h-full object-cover  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={homeGalleryImg5}
            alt="..."
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarouselCompo;
