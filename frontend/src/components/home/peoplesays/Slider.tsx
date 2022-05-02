import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { SliderPeople } from "../../../types/Interface";
import IconsComponent from "../iconsComponent/IconsComponent";

import { useState, useEffect } from "react";

const Slider = ({ sliderPeople }: SliderPeople) => {
  const [index, setIndex] = useState<number>(0);
  console.log("INDEX: ", index);

  useEffect(() => {
    const lastIndex = sliderPeople.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, sliderPeople]);

  return (
    <div className="peoplesSlider__container">
      {/*Map from here*/}
      {sliderPeople.map((slide, slideIndex) => {
        const { id, name, text, image, icons } = slide;
        console.log("SLIDE-INDEX: ", slideIndex);

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
          <div className={`peopleSlide__content ${position}`} key={id}>
            <div className="peopleSlider__img">
              <div className="people__avatar">
                <img src={image} alt={name} title={name} />
              </div>
              <h4 className="people__person">{name}</h4>
            </div>
            <div className="people__stars">
              <IconsComponent iconsItems={icons} />
            </div>
            <p className="people__saying">{text}</p>
          </div>
        );
      })}
      {/*end herE*/}
      <div className="slider__previous">
        <HiOutlineArrowNarrowLeft onClick={() => setIndex(index - 1)} />
      </div>
      <div className="slider__next">
        <HiOutlineArrowNarrowRight onClick={() => setIndex(index + 1)} />
      </div>
    </div>
  );
};

export default Slider;
