import { SliderPeople } from "../../../types/Interface";
import IconsComponent from "../iconsComponent/IconsComponent";

const SlidePeople = ({ sliderPeople }: SliderPeople) => {
  return (
    <>
      {sliderPeople.map((slide) => {
        const { id, name, text, image, icons } = slide;
        return (
          <div className="peopleSlide__content" key={id}>
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
        );
      })}
    </>
  );
};

export default SlidePeople;
