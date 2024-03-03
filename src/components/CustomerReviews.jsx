import { celebs, customerReviews } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-auto mx-5 my-12 md:mx-12 md:my-24 flex flex-col md:gap-3 ">
      {/* <div className=" flex-row justify-center items-center gap-y-12 md:gap-x-14 lg:gap-x-24  mt-6">
        <Slider {...settings}>
          {customerReviews.map((item, index) => (
            <blockquote className="rounded-lg bg-cardOverlay  backdrop-blur-lg hover:drop-shadow-lg p-8 w-96">
              <div className="flex items-center rounded gap-4 ">
                <img
                  className="w-12 h-12 object-cover"
                  alt="avatar"
                  src={item.img}
                />

                <div>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    {item.name}
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                {item.desc}
              </p>
            </blockquote>
          ))}
        </Slider>
      </div> */}

      {/* <div className=" flex-row justify-center items-center gap-y-12 md:gap-x-14 lg:gap-x-24  mt-6">
        <Slider {...settings}>
          {customerReviews.map((item, index) => (
            <blockquote className="rounded-lg bg-cardOverlay  backdrop-blur-lg hover:drop-shadow-lg p-8 w-96">
              <div className="flex items-center rounded gap-4 ">
                <img
                  className="w-12 h-12 object-cover"
                  alt="avatar"
                  src={item.img}
                />

                <div>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    {item.name}
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                {item.desc}
              </p>
            </blockquote>
          ))}
        </Slider>
      </div> */}

      <p className="mb-4 xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        Review - Karve Road Branch
      </p>
      <div
        class="elfsight-app-c9ce9c46-f9cc-498a-afb0-53659c6448ec"
        data-elfsight-app-lazy
      ></div>
      <div className="w-[100vw] relative bg-primary z-10 h-10 mt-[-3rem]"></div>

      <p className="mb-4 xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        Review - Shanipar Branch
      </p>
      <div
        class="elfsight-app-1bd76106-5952-4328-9a28-4cd829587ab6"
        data-elfsight-app-lazy
      ></div>
      <div className="w-[100vw] relative bg-primary z-10 h-10 mt-[-3rem]"></div>
    </div>
  );
};

export default CustomerReviews;
