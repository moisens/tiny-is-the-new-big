import Button from "../../button/Button";
import IconsComponent from "./IconsComponent";
import { FoundersProps } from "../../../types/Interface";

const Founders = (props: FoundersProps) => {
  const { foundersItems } = props;
  console.log(foundersItems);

  return (
    <>
      {foundersItems.map((founder) => {
        const { id, name, title, image, icons, contact } = founder;

        return (
          <div className="about__slide" key={id}>
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
