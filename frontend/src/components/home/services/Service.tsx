import "./services.scss";
import Services from "../../../assets/services.svg";
import { servicesData } from "../../../utils/services-utils";
import Tab from "./ServiceTab";

const Service = () => {
  return (
    <section className="services__container" id="services">
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
      <div className="services__tab__container">
        <Tab services={servicesData} />
      </div>
      <div className="services__triangle2"></div>
    </section>
  );
};

export default Service;
