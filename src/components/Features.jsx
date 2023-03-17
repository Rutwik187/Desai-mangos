import React from "react";
import { featuresData } from "../data";

const Features = () => {
  return (
    <div className="w-auto m-5 md:m-12 flex flex-col md:gap-0 ">
      <p className="xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        Why Choose Us
      </p>
      <div className="flex md:flex-row flex-col justify-center items-center gap-y-12 md:gap-x-14 lg:gap-x-24  m-10">
        {featuresData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2"
          >
            <img className="h-20 w-auto" src={item.img} alt={item.title} />
            <p className="font-semibold text-base md:text-lg text-center text-gray-700 ">
              {item.title}
            </p>
            <p className="text-sm md:text-base text-center text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
