import "./services.scss";
import Services from "../../../assets/services.svg";
import Buy from "../../../assets/buy.svg";
import Build from "../../../assets/build.svg";
import Rent from "../../../assets/rent.svg";
import Location from "../../../assets/location.svg";

const Service = () => {
  return (
    <section className="services__container">
      <div className="services__triangle1"></div>
      <div className="services__content">
        <div className="services__illu__title">
          <div className="services__illu">
            <img src={Services} alt="" />
          </div>
          <h4 className="services__title__H4">
            Our <span className="span__title">Services</span>
          </h4>
        </div>
        <h2 className="services__title__H2">
          The future belongs to those who lives big in a tiny house.
        </h2>
      </div>
      <p className="services__description__P">
        Broker ipsum dolor sit amet, consectetuer noted architect elit. Modern
        interior commodo ligula eget dolor. Cum sociis panoramic views penatibus
        et magnis dis downtown loft montes, nascetur soaring views mus.
      </p>
      {/*Tab*/}
      <div className="services__tab__container">
        <div className="services__btns__container">
          <button className="services__btns">
            <div className="btns__icons__container">
              <img src={Buy} alt="buy" />
            </div>
            Buy
          </button>
          <button className="services__btns">
            <div className="btns__icons__container">
              <img src={Build} alt="buy" />
            </div>
            Build
          </button>
          <button className="services__btns">
            <div className="btns__icons__container">
              <img src={Rent} alt="buy" />
            </div>
            Rent
          </button>
          <button className="services__btns">
            <div className="btns__icons__container">
              <img src={Location} alt="buy" />
            </div>
            Location
          </button>
        </div>
        <div className="services__tab__content">
          <p className="services__tab__P">
            Broker ipsum dolor sit amet, consectetuer noted architect elit.
            Modern interior commodo ligula eget dolor. Cum sociis panoramic
            views penatibus et magnis dis downtown loft montes, nascetur soaring
            views mus.
          </p>
        </div>
      </div>
      <div className="services__triangle2"></div>
    </section>
  );
};

export default Service;
