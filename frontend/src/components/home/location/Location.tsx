import "./location.scss";
import PinLocation from "../../../assets/location.svg";

const Location = () => {
  return (
    <section className="location__container">
      <div className="location__content">
        <div className="location__text">
          <div className="illu__container">
            <div className="location__illu">
              <img src={PinLocation} alt="location" />
            </div>
            <h4 className="title__H4">
              Our <span className="span__title">Loccations</span>
            </h4>
          </div>
          <h2 className="title__H2">
            We will help you find a good place where you will settle.
          </h2>
          <p className="location__P">
            Easily move your Tiny House to a more profitable area with its
            towing system. Living with less, means moving towards a future with
            reduced environmental impact.
          </p>
          <button className="location__btn">All the locations</button>
        </div>
        <div className="location__slider">Slider goes here</div>
      </div>
    </section>
  );
};

export default Location;
