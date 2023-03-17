import { celebs } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesSlider = () => {
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
    <div className="w-auto my-6 md:my-24 flex flex-col md:gap-0 ">
      <h1 className="font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl ">
        Politicians
      </h1>
      <div className=" md:flex-row flex-col justify-center items-center gap-y-12 md:gap-x-14 lg:gap-x-24  ">
        <Slider {...settings}>
          {celebs.map((item, index) => (
            <div
              key={index}
              className="min-w-300 h-[270px]  md:w-300 overflow-hidden  rounded-lg   my-6  backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative "
            >
              <img
                className="object-cover w-full h-full"
                src={item.img}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImagesSlider;
