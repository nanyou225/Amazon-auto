import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SelectCar from "./SelectCar";

function ImmatCarousel() {
  return (
    <div className="container px-24 mx-auto flex my-1">
      <SelectCar />
      <div className="relative mr-6">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
          width={940}
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
