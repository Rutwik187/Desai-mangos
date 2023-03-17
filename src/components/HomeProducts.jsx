import React from "react";
import { productData } from "../data";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <div className="w-auto m-5 md:m-12 flex flex-col md:gap-0 ">
      <p className="xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        A mango Basket Full of Happiness
      </p>
      <div className=" flex flex-wrap justify-center items-center  md:gap-x-14 lg:gap-x-24  m-10">
        {productData.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] h-auto  md:w-[280px]   bg-cardOverlay rounded-lg py-2 px-4  my-6  backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-center gap-2"
          >
            <motion.div
              className="w-40 h-40 drop-shadow-2xl"
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>

            <p className="text-textColor font-semibold text-base md:text-lg">
              {item?.title}
            </p>

            {/* <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-textColorYellow">₹</span>{" "}
              {item.price}
            </p> */}

            <Link to={item.linkTo}>
              <button
                type="button"
                className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
              >
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
