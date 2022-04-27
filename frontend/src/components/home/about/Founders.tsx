import Button from "../../button/Button";

const Founders = ({ founders }) => {
  return (
    <>
      {founders.map((founder) => {
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
                {icons.map((stars) => (
                  <div key={stars.id}>{stars.star}</div>
                ))}
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
