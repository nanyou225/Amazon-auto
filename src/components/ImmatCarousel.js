import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SelectCar from "./SelectCar";
import image from "next/image";

function ImmatCarousel() {
  return (
    <div className="container px-24 mx-auto my-0.5 md:flex gap-8">
      <SelectCar />
      <div className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          transitionTime={1000}
        >
          <div>
            <img
              src="../../assets/images/carousel/bestjump.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              src="../../assets/images/carousel/cylinders.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              src="../../assets/images/carousel/eliason.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              src="../../assets/images/carousel/hochgesang.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              src="../../assets/images/carousel/kirchoff.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              src="../../assets/images/carousel/mossholder.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImmatCarousel;
