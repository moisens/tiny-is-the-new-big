import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { SliderPeople } from "../../../types/Interface";
import IconsComponent from "../iconsComponent/IconsComponent";

import { useState, useEffect, Fragment } from "react";

const Slider = ({ sliderPeople }: SliderPeople) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndex = sliderPeople.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, sliderPeople]);

  return (
    <header className="peopleSlider__container">
      <section className="peopleSlider__content">
        {sliderPeople.map((slide, slideIndex) => {
          const { id, name, text, image, icons } = slide;

          let position: string = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }

          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === sliderPeople.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <div className={`sliderImages__container ${position}`} key={id}>
              <div className="slider__image">
                <img src={image} alt={name} title={name} />
              </div>
              <div className="slider__stars">
                <h4 className="slider__title">{name}</h4>
                <span className="slider__icons">
                  <IconsComponent iconsItems={icons} />
                </span>
              </div>
              <div className="slider__text">
                <p>{text}</p>
              </div>
            </div>
          );
        })}
        <div className="slider__previous">
          <HiOutlineArrowNarrowLeft onClick={() => setIndex(index - 1)} />
        </div>
        <div className="slider__next">
          <HiOutlineArrowNarrowRight onClick={() => setIndex(index + 1)} />
        </div>
      </section>
    </header>
  );
};

export default Slider;
