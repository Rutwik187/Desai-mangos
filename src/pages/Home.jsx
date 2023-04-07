import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import CustomerReviews from "../components/CustomerReviews";
import Features from "../components/Features";
import HomeContainer from "../components/HomeContainer";
import HomeProducts from "../components/HomeProducts";
import LifeCycle from "../components/LifeCycle";

import Testimonials from "../components/Testimonials";
import HomeImagesSlider from "../components/HomeImageSlider";
import Carousel from "../components/Carousel";
import CarouselCompo from "../components/Carousel";

function Home() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <HomeContainer />
      {/* <CarouselCompo /> */}
      {/* <HomeImagesSlider /> */}
      <Features />
      <HomeProducts />
      {/* <Banner /> */}
      <LifeCycle />
      <Testimonials />
      <CustomerReviews />
      <ContactUs />
    </div>
  );
}

export default Home;
