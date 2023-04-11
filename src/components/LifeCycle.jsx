import React from "react";
import "./lifeCycle.css";
import handPicked from "../img/hand-picked.png";
import love from "../img/love.png";
import transportation from "../img/transport.png";
import mango from "../img/mangos.png";

const LifeCycle = () => {
  return (
    <section className="mx-5 my-12 md:mx-12 md:my-24">
      <p className="xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        Our Product Life Cycle
      </p>

      <div class="timeline">
        <div class="timeline_container left">
          <div class="timeline_count">Day 1</div>

          <img class="timeline_icon" src={handPicked} alt="" />

          <div class="timeline_content">
            <h2>We hand-pick our mangoes:</h2>
            <p>
              Mangoes are carefully handpicked and systematically packed in
              wooden boxes (peti)
            </p>
          </div>
        </div>

        <div class="timeline_container right">
          <div class="timeline_count">Day 2</div>

          <img class="timeline_icon" src={transportation} alt="" />

          <div class="timeline_content">
            <h2>Careful Transportation:</h2>
            <p>
              Packed mangoes are then carefully transported to our stores in
              Pune.
            </p>
          </div>
        </div>
        <div class="timeline_container left">
          <div class="timeline_count">Day 3</div>

          <img class="timeline_icon" src={mango} alt="" />

          <div class="timeline_content">
            <h2>Ripening of the mangoes:</h2>
            <p>
              Ripening process of the mangoes takes place naturally in the
              temperature manintained in the store house.
            </p>
          </div>
        </div>
        <div class="timeline_container right">
          <div class="timeline_count">Day 12</div>

          <img class="timeline_icon" src={love} alt="" />

          <div class="timeline_content">
            <h2>Love from the customers:</h2>
            <p>
              Mangoes are ready to eat and then customer enjoys pure and best
              quality Desai Bandhu's Mangoes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCycle;
