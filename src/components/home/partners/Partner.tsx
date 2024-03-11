import "./partners.scss";
import Airbnb from "../../../assets/airbnb.png";
import Trip from "../../../assets/logo-trip.png";
import Viarail from "../../../assets/viarail-logo.png";
import IngLogo from "../../../assets/ing-logo.png";
import SwissAir from "../../../assets/swissair.png";
import Thalys from "../../../assets/thalys.png";

const Partner = () => {
  return (
    <section className="partner__container">
      <div className="partner__content">
        <div className="partners__slider__logo">
          <div className="slider-image-container">
            <img src={Airbnb} alt="Airbnb" />
          </div>
          <div className="slider-image-container">
            <img src={Trip} alt="Tripadvisor" />
          </div>
          <div className="slider-image-container">
            <img src={Viarail} alt="Via rail canada" />
          </div>
          <div className="slider-image-container">
            <img src={SwissAir} alt="Swiss Air" />
          </div>
          <div className="slider-image-container">
            <img src={IngLogo} alt="Ing" />
          </div>
          <div className="slider-image-container">
            <img src={Thalys} alt="Thalys" />
          </div>
        </div>
        <div className="partners__slider__logo">
          <div className="slider-image-container">
            <img src={Airbnb} alt="Airbnb" />
          </div>
          <div className="slider-image-container">
            <img src={Trip} alt="Tripadvisor" />
          </div>
          <div className="slider-image-container">
            <img src={Viarail} alt="Via rail canada" />
          </div>
          <div className="slider-image-container">
            <img src={SwissAir} alt="Swiss Air" />
          </div>
          <div className="slider-image-container">
            <img src={IngLogo} alt="Ing" />
          </div>
          <div className="slider-image-container">
            <img src={Thalys} alt="Thalys" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
