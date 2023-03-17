import { useEffect } from "react";
import { productData } from "../data";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Products = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-auto m-5 md:m-12 flex flex-col md:gap-0 ">
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        Our Product Range
      </p>
      <div className=" md:flex-row flex-col justify-center items-center gap-y-12 md:gap-x-14 lg:gap-x-24  m-10">
        <Slider {...settings}>
          {productData.map((item, index) => (
            <div
              key={index}
              className="min-w-250 h-[175px]  md:w-300   bg-cardOverlay rounded-lg py-2 px-4  my-6  backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative shadow-2xl"
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-textColorYellow flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.title}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-textColorYellow">₹</span>{" "}
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
