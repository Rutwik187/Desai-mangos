import React from "react";
import { Carousel } from "flowbite";

import homeGalleryImg1 from "../img/homeGallery1.jpg";
import homeGalleryImg2 from "../img/homeGallery2.jpg";
// import homeGalleryImg3 from "../img/homeGallery3.jpg";
import homeGalleryImg4 from "../img/homeGallery4.jpg";
import homeGalleryImg5 from "../img/homeGallery5.jpg";

const CarouselCompo = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={homeGalleryImg1} alt="..." />
        <img src={homeGalleryImg2} alt="..." />
        {/* <img src={homeGalleryImg3} alt="..." /> */}
        <img src={homeGalleryImg4} alt="..." />
        <img src={homeGalleryImg5} alt="..." />
      </Carousel>
    </div>
  );
};

export default CarouselCompo;
