import React, { useState } from "react";
import { useEffect } from "react";

import "./Slider.css";

function Slider() {
  let [currentIndex, setCurrentIndex] = useState(0);
  const [sliderItemsLength, setSliderItems] = useState(0);

  useEffect(() => {
    const sliderItems = document.querySelectorAll(".slider__item");
    setSliderItems(sliderItems.length);
  }, []);

  function handelIncrementIndex() {
    currentIndex === sliderItemsLength - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(++currentIndex);
  }

  function handelDecrementIndex() {
    currentIndex === 0
      ? setCurrentIndex(sliderItemsLength - 1)
      : setCurrentIndex(--currentIndex);
  }

  return (
    <section className="slider">
      <div className="slider__wrapper">
        <div
          className="slider__items"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="slider__item">
            <img
              src="./images/slider-image-2.jpg"
              alt=""
              className="slider__img"
            />
          </div>
          <div className="slider__item">
            <img
              src="./images/slider-image-3.jpg"
              alt=""
              className="slider__img"
            />
          </div>
          <div className="slider__item">
            <img
              src="./images/slider-image-4.jpg"
              alt=""
              className="slider__img"
            />
          </div>
          <div className="slider__item">
            <img
              src="./images/slider-image-5.jpg"
              alt=""
              className="slider__img"
            />
          </div>
          <div className="slider__item">
            <img
              src="./images/slider-image-6.jpg"
              alt=""
              className="slider__img"
            />
          </div>
          <div className="slider__item">
            <img
              src="./images/slider-image-7.jpg"
              alt=""
              className="slider__img"
            />
          </div>
          <div className="slider__item">
            <img
              src="./images/slider-image-8.jpg"
              alt=""
              className="slider__img"
            />
          </div>
        </div>
        <div className="slider__buttons">
          <button className="previous" onClick={handelDecrementIndex}>
            <i className="fa-solid fa-chevron-left fa-2x"></i>
          </button>
          <button className="next" onClick={handelIncrementIndex}>
            <i className="fa-solid fa-chevron-right fa-2x"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
