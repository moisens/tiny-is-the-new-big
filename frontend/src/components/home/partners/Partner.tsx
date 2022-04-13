import "./partners.scss";
import Airbnb from "../../../assets/airbnb.png";
import Trip from "../../../assets/tripadvisor.svg";
import Viarail from "../../../assets/viarail-logo.png";
import IngLogo from "../../../assets/ing-logo.png";
import SwissAir from "../../../assets/swissair.png";

const Partner = () => {
  return (
    <section className="partner__container">
      <div className="partner__clippath-1"></div>
      <div className="partner__content">
        <div className="partners__logo">
          <img src={Airbnb} alt="airbnb-logo" />
        </div>
        <div className="partners__logo">
          <img src={Trip} alt="trip-advisor" />
        </div>
        <div className="partners__logo">
          <img src={Viarail} alt="Viarail-logo" />
        </div>
        <div className="partners__logo">
          <img src={IngLogo} alt="trip-advisor" />
        </div>
        <div className="partners__logo">
          <img src={SwissAir} alt="trip-advisor" />
        </div>
      </div>
      <div className="partner__clippath-2"></div>
    </section>
  );
};

export default Partner;
