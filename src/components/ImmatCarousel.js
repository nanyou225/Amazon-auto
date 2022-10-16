import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SelectCar from "./SelectCar";

function ImmatCarousel() {
  return (
    <div className="container px-24 mx-auto flex gap-4 my-1">
      <SelectCar />
      <div className="relative">
        <Carousel
          autoPlay
          infinteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={4000}
          width={800}
        >
          <div className="">
            <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
          </div>
          <div className="">
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          </div>
          <div className="">
            <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
          </div>
          <div className="">
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImmatCarousel;
