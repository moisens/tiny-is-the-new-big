import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { SliderPeople } from "../../../types/Interface";
import IconsComponent from "../iconsComponent/IconsComponent";

import { useState, useEffect, Fragment } from "react";

const Slider = ({ sliderPeople }: SliderPeople) => {
  const [index, setIndex] = useState<number>(0);
  console.log("INDEX: ", index);

  useEffect(() => {
    const lastIndex = sliderPeople.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, sliderPeople]);

  return (
    <header className="peopleSlider__container">
      <section className="peopleSlider__content">
        {/*div to be returned*/}
        <div className="sliderImages__container">
          <div className="slider__image">
            <img src="" alt="" title="" />
          </div>
          <div className="slider__stars">⭐️⭐️⭐️⭐️⭐️</div>
          <div className="slider__text">
            <p>
              Broker ipsum dolor sit amet, consectetuer noted architect elit.
              Modern interior commodo ligula eget dolor. Cum sociis panoramic
              views penatibus et magnis dis downtown loft.
            </p>
          </div>
        </div>
        <div className="sliderImages__container">
          <div className="slider__image">
            <img src="" alt="" title="" />
          </div>
          <div className="slider__stars">
            <h4 className="slider__title">name</h4>
            ⭐️⭐️⭐️⭐️⭐️
          </div>
          <div className="slider__text">
            <p>
              Broker ipsum dolor sit amet, consectetuer noted architect elit.
              Modern interior commodo ligula eget dolor. Cum sociis panoramic
              views penatibus et magnis dis downtown loft.
            </p>
          </div>
        </div>
        {/*div to be returned*/}
      </section>
    </header>
  );
};

export default Slider;

//gment>
//  {/*Map from here*/}
//  {sliderPeople.map((slide, slideIndex) => {
//    const { id, name, text, image, icons } = slide;
//    console.log("SLIDE-INDEX: ", slideIndex);
//
//    let position: string = "nextSlide";
//    if (slideIndex === index) {
//      position = "activeSlide";
//    }
//
//    if (
//      slideIndex === index - 1 ||
//      (index === 0 && slideIndex === sliderPeople.length - 1)
//    ) {
//      position = "lastSlide";
//    }
//
//    return (
//      <div className={`peopleSlide__content ${position}`} key={id}>
//        <div className="peopleSlider__img">
//          <div className="people__avatar">
//            <img src={image} alt={name} title={name} />
//          </div>
//          <h4 className="people__person">{name}</h4>
//        </div>
//        <div className="people__stars">
//          <IconsComponent iconsItems={icons} />
//        </div>
//        <p className="people__saying">{text}</p>
//      </div>
//    );
//  })}
//  {/*end here*/}
//  <div className="slider__previous">
//    <HiOutlineArrowNarrowLeft onClick={() => setIndex(index - 1)} />
//  </div>
//  <div className="slider__next">
//    <HiOutlineArrowNarrowRight onClick={() => setIndex(index + 1)} />
//  </div>
//</Fragment>
