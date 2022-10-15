import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImmatCarousel() {
  return (
    <div className="container px-24 mx-auto flex space-x-6">
      <div>Immat</div>
      <div className="relative">
        <Carousel
          autoPlay
          infinteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={4000}
        >
          <div className="">
            <img
              loading="lazy"
              src="../assets/images/carousel/kirchoff.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              loading="lazy"
              src="../assets/images/carousel/bestjump.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              loading="lazy"
              src="../assets/images/carousel/eliason.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              loading="lazy"
              src="../assets/images/carousel/hochgesang.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImmatCarousel;
