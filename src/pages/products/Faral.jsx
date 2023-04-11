import React from "react";
import faralFull from "../../img/faral-full.jpg";
import BuyNowButtons from "../../components/BuyNowButtons";
import ImagesSlider from "../../components/ImagesSlider";
import { faralImages } from "../../data";

const Faral = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="Mango"
            className="lg:w-2/5 w-full  object-cover object-center rounded border border-gray-200"
            src={faralFull}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Snacks
            </h2>
            <h1 className="text-yellow-600 text-3xl title-font font-medium mb-1">
              Diwali Faral
            </h1>

            <p className="leading-relaxed my-4">
              At Desai Bandhu, we specialize in serving up traditional and
              authentic Diwali faral that captures the true essence of Indian
              celebrations. Our meticulously made Chakli, Besan Laddoo, Poha
              Chivda, Shankarpali, Shev, Karanji, Anarse, and more are made with
              only the highest quality ingredients and traditional cooking
              techniques. We also offer a Traditional Diwali Faral Daba and
              other special Diwali products.
              <mark>
                {" "}
                We offer door delivery across India and all over the globe{" "}
              </mark>
              . Celebrate Diwali with us and experience the true flavors of
              India.
            </p>

            <h1 className="text-textColorYellow text-2xl title-font font-bold mb-1">
              Buy Now At:
            </h1>

            <BuyNowButtons />
          </div>
        </div>
        <h1 className="mt-14 text-yellow-600 text-3xl title-font font-medium mb-1">
          Diwali Faral Daba
        </h1>
        <p>
          Welcome to Desaibandhu, where we celebrate traditional Indian snacks!
          Our journey takes us to the heart of India, where we offer
          mouthwatering treats loved by all ages.
          <br /> <br /> Patal Poha Chiwda - A classic Maharashtrian snack made
          with flattened rice flakes tossed in spices, nuts, and dried fruits.
          It's a perfect blend of sweet, tangy, and spicy flavors, making it
          irresistible.
          <br />
          <br /> Shankarpali - Also known as sweet diamond biscuits, Shankarpali
          is a popular snack during festive occasions. Made with all-purpose
          flour, sugar, ghee, and cardamom, these crispy and sweet treats are
          perfect to munch on with tea or coffee.
          <br /> <br /> Chakli - This savory snack hails from Maharashtra and is
          a favorite during festive seasons. Made with rice flour, gram flour,
          and spices, Chakli is shaped into a spiral or pretzel-like shape and
          deep-fried. It's a crunchy and addictive snack loved by all.
          <br /> <br /> Shev - A crispy and spicy noodle-like snack popular in
          Maharashtra and other parts of India. Made with gram flour, spices,
          and hot oil, Shev is deep-fried until crispy and flavored with spices
          like red chili powder, turmeric, and cumin. Perfect with tea or as a
          topping for chaats.
          <br /> <br /> Besan Ladu - Melt-in-your-mouth sweet balls made from
          roasted gram flour (besan), ghee, sugar, and cardamom. Besan Ladu is a
          festive delight and often made during special occasions like
          festivals. Rich, flavorful, and a perfect sweet treat for any festive
          gathering.
          <br /> <br /> Our website offers authentic flavors of these
          traditional Indian snacks. Our snacks are handcrafted with time-tested
          recipes and the finest ingredients. Join us on this culinary adventure
          and indulge in the delectable world of Patal Poha Chiwda, Shankarpali,
          Chakli, Shev, and Besan Ladu. Explore our range of snacks and treat
          your taste buds to an unforgettable experience of flavors and
          textures. Order now and relish these iconic Indian snacks that are
          sure to make your taste buds dance with joy!
        </p>
        <ImagesSlider images={faralImages} title="" />
      </div>
    </section>
  );
};

export default Faral;
