import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-elastic-carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// FontIcon
import { FaArrowRight } from "react-icons/fa";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const nextButton = () => <FaArrowRight />;
  return (
    <>
      <div className="slider-container">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <img
              src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div>
          <Carousel itemsToShow={1} enableAutoPlay={true}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Carousel>
        </div>
        <div className="react-slick">
          <Slider
            {...settings}
            prevArrow={<FaArrowRight />}
            nextArrow={<FaArrowRight />}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        <div className="fontIcon">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet labore
          dolor deserunt dolores ea. Culpa sit sunt distinctio, non laudantium
          eaque porro. Doloremque et iste, eum quis doloribus ab voluptatum!
        </div>
        <h1>
          <FaArrowRight />
        </h1>
      </div>
    </>
  );
}

export default App;
