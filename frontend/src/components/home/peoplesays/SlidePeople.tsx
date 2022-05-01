import { SliderPeople } from "../../../types/Interface";
import IconsComponent from "../iconsComponent/IconsComponent";
import { useState, useEffect } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const SlidePeople = ({ sliderPeople }: SliderPeople) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndex = sliderPeople.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderPeople]);

  return (
    <>
      {sliderPeople.map((slide, slideIndex) => {
        const { id, name, text, image, icons } = slide;
        let position = "nextSlide";
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
          <div key={id}>
            <div className="slider__previous">
              <HiOutlineArrowNarrowLeft onClick={() => setIndex(index - 1)} />
            </div>
            <div className={`peopleSlide__content ${position}`}>
              <div className="peopleSlider__img">
                <div className="people__avatar">
                  <img src={image} alt={name} title={name} />
                </div>
                <h4 className="people__person">{name}</h4>
              </div>
              <div className="people__stars">
                <IconsComponent iconsItems={icons} />
              </div>
              <p className="people__saying">{text} </p>
            </div>
            <div className="slider__next">
              <HiOutlineArrowNarrowRight onClick={() => setIndex(index + 1)} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SlidePeople;
