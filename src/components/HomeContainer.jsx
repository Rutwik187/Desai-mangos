import React from "react";
import farmerIcon from "../img/farmerIcon.png";
import CountUp from "react-countup";
import { heroData } from "../data";
import { NavHashLink } from "react-router-hash-link";

const HomeContainer = () => {
  return (
    <section
      className="w-auto m-5 md:m-12 grid grid-cols-1 md:grid-cols-5 gap-12 xl:gap-y-24 xl:gap-x-12 md:gap-0 "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 md:col-span-2">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Best in Quality
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={farmerIcon}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[1.5rem] lg:text-[2.5rem] font-bold tracking-wide text-headingColor">
          Desai Bandhu Ambewale {/* <br /> */}
          <span className="text-textColorYellow text-[3rem] lg:text-[4rem]">
            Mango Hub of India
          </span>
        </p>

        <div className="w-full flex gap-4">
          <div className="flex flex-col justify-center items-center ">
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl text-textColorYellow">
              <CountUp
                end={100000}
                start={99500}
                duration={5}
                delay={0}
                suffix="+"
              />
            </span>
            <span className="lg:text-xl">Happy Customers</span>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl text-textColorYellow">
              <CountUp
                end={1932}
                start={2023}
                duration={5}
                delay={0}
                // suffix="+"
              />
            </span>
            <span className="lg:text-xl">Since</span>
          </div>
        </div>

        <NavHashLink
          href="/#categories"
          smooth
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </NavHashLink>
      </div>

      <div className="py-2 flex-1 flex items-center md:col-span-3 md:m-12">
        {/* <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        /> */}

        <div className="md:16 w-full h-full top-0 left-0 flex items-center justify-center  gap-8 md:gap-12 xl:gap-24 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="md:w-100  lg:w-160  p-4 bg-white backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg border-solid border-2 border-textColorYellow"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                {/* <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">₹</span> {n.price}
                </p> */}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
