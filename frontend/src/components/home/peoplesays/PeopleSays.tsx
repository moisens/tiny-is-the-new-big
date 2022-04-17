import "./peoplesays.scss";
import FilledYllowStar from "../../../assets/filled-yellow-star.svg";
import HalfFilledYllowStar from "../../../assets/half-filled-yellow-star.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
import ArrowRight from "../../../assets/arrow-right.svg";


const PeopleSays = () => {
  return (
    <section className="people__container">
      <div className="people__triangle1"></div>
      <h2 className="people__titleH2">What people say about us.</h2>
      <div className="people__slider">
        <div className="peoplesSlider__container">
          <div className="slider__previous">
            <img src={ArrowLeft} alt="arrow-left" />
          </div>
          {/*Map from here*/}
          <div className="peopleSlide__content">
            <div className="peopleSlider__img">
              <div className="people__avatar">
                <img
                  src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1649899897/tiny%20is%20the%20new%20big/christopher-campbell-rDEOVtE7vOs-unsplash_vnbxj5.jpg"
                  alt="avatar"
                />
              </div>
              <h4 className="people__person">Jackeline Snow</h4>
            </div>
            <div className="people__stars">
              <div className="star">
                <img src={FilledYllowStar} alt="stars" />
              </div>
              <div className="star">
                <img src={FilledYllowStar} alt="stars" />
              </div>
              <div className="star">
                <img src={FilledYllowStar} alt="stars" />
              </div>
              <div className="star">
                <img src={FilledYllowStar} alt="stars" />
              </div>
              <div className="star">
                <img src={HalfFilledYllowStar} alt="stars" />
              </div>
            </div>
            <p className="people__saying">
              Broker ipsum dolor sit amet, consectetuer noted architect elit.
              Modern interior commodo ligula eget dolor. Cum sociis panoramic
              views penatibus et magnis dis downtown loft.
            </p>
          </div>
          {/*end herE*/}
          <div className="slider__next">
          <img src={ArrowRight} alt="arrow-left" />
          </div>
        </div>
      </div>
      <div className="people__triangle2"></div>
    </section>
  );
};

export default PeopleSays;
