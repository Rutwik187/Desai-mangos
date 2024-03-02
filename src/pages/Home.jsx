import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import CustomerReviews from "../components/CustomerReviews";
import Features from "../components/Features";
import HomeContainer from "../components/HomeContainer";
import HomeProducts from "../components/HomeProducts";
import LifeCycle from "../components/LifeCycle";

import Testimonials from "../components/Testimonials";

import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Blogs from "../components/Blogs";

function Home() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <HomeContainer />
      {/* <CarouselCompo /> */}
      {/* <HomeImagesSlider /> */}
      <Features />
      <Categories />
      <FeaturedProducts />
      {/* <HomeProducts /> */}
      {/* <Banner /> */}
      <LifeCycle />
      <Testimonials />
      <Blogs />
      <CustomerReviews />
      <ContactUs />
    </div>
  );
}

export default Home;
