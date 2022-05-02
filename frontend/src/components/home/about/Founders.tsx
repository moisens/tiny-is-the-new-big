import Button from "../../button/Button";
import IconsComponent from "../iconsComponent/IconsComponent";
import { FoundersProps } from "../../../types/Interface";
import { useState, useEffect } from "react";

const Founders = (props: FoundersProps) => {
  const { foundersItems } = props;

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndex = foundersItems.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, foundersItems]);

  return (
    <>
      {foundersItems.map((founder, founderIndex) => {
        const { id, name, title, image, icons, contact } = founder;
        let position: string = "nextSlide";

        if (founderIndex === index) {
          position = "activeSlide";
        }
        if (
          founderIndex === index - 1 ||
          (index === 0 && founderIndex === foundersItems.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <div className={`about__slide ${position}`} key={id}>
            <div className="slider__img">
              <div className="about__avatar">
                <img src={image} alt={name} title={name} />
              </div>
              <p className="about__person">
                {name}
                <span className="about__position">{title}</span>
              </p>
            </div>
            <div className="slider__btn">
              <div className="about__stars">
                <IconsComponent iconsItems={icons} />
              </div>
              <div className="about__contact">
                <Button className="about__a" as="a" href="#contact">
                  {contact}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Founders;
