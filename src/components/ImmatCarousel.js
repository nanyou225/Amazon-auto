import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SelectCar from "./SelectCar";

function ImmatCarousel() {
  return (
    <div className="container px-24 mx-auto flex my-0.5 gap-3">
      <SelectCar />
      <div className="relative w-full h-full">
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
            <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImmatCarousel;
