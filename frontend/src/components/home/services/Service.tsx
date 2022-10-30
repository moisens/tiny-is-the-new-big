import "./services.scss";
import { servicesData } from "../../../utils/services-utils";
import Tab from "./ServiceTab";
import { MdHomeRepairService } from "react-icons/md"

const Service = () => {
  return (
    <section className="services__container" id="services">
      <div className="services__triangle1"></div>
      <div className="services__content">
        <div className="services__illu__title">
          <div className="services__illu">
            <MdHomeRepairService size="1.8rem" color="#8db530" />
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
    </section>
  );
};

export default Service;
