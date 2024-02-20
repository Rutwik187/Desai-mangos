import React, { useState } from "react";
// import galleryImages from "../data/"
import { galleryImages } from "../data";

const ZoomGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className="my-12 font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl ">
        Appreciation Letters
      </h1>
      <div className="flex flex-wrap lg:grid-cols-3 gap-6 xl:gap-12 mt-6 items-center justify-center">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer overflow-hidden group"
            onClick={() => handleClick(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[35rem] object-cover transition duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-stone-800 text-white py-6 px-2 rounded-md text-center">
                <p className="text-lg font-bold">{image.desc}</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <svg
                className="h-16 w-16 text-white transform hover:scale-125 transition duration-300"
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 894.839 894.839"
                xml:space="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M678.854,590.465c-12.177,16.881-25.729,32.833-40.643,47.746c-14.912,14.912-30.865,28.465-47.746,40.643l208.663,208.663 c9.763,9.764,25.592,9.764,35.355,0l53.032-53.032c9.763-9.764,9.763-25.593,0-35.356L678.854,590.465z"></path>{" "}
                    <path d="M363.501,727c77.808,0,149.902-24.452,209.028-66.083c34.303-24.152,64.236-54.087,88.389-88.388 c41.631-59.126,66.083-131.222,66.083-209.029c0-200.756-162.745-363.5-363.5-363.5C162.746,0,0.001,162.744,0.001,363.5 C0,564.255,162.745,727,363.501,727z M183.25,333.25c0-11.046,8.954-20,20-20h91.5h19v-19v-91.5c0-11.046,8.954-20,20-20h60 c11.046,0,20,8.954,20,20v110.5h110.5c11.046,0,20,8.954,20,20v60c0,11.046-8.954,20-20,20h-22.612h-87.888v88.888v21.612 c0,11.046-8.954,20-20,20h-60c-11.046,0-20-8.954-20-20v-110.5h-110.5c-11.046,0-20-8.954-20-20L183.25,333.25L183.25,333.25z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        ))}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-90"
            onClick={handleClose}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-h-full max-w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ZoomGallery;
