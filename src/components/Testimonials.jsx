import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import invertedCommas from "../img/inverted-commas.svg";

import { celebsTestimonials } from "../data";

const Testimonials = () => {
  return (
    <div>
      <div className="flex items-center justify-between h-full w-full absolute z-0 ">
        <div className="w-1/3  h-full" />
        <div className="w-4/6 ml-16  h-full" />
      </div>
      <div className="xl:px-20 px-8 pt-6 2xl:mx-auto 2xl:container relative z">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={7}
        >
          <p className="xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
            Celebrities who love our Mangoes.
          </p>

          <Slider>
            {celebsTestimonials.map((item, index) => (
              <Slide index={index}>
                <div className="flex">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-60">
                      <img
                        src={item.img}
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-top object-contain shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-orange-50 rounded-full">
                        <img
                          className="w-4/6"
                          src={invertedCommas}
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        {/* <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Sweetest Mangoes I've Ever Tasted!
                        </h1> */}
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          {item.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                alt="previous"
                className="bg-yellow-100 rounded-full p-4"
              />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2 bg-yellow-100 rounded-full p-4"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                alt="next"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};
export default Testimonials;
