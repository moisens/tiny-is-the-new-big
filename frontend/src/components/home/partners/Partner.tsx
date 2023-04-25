import "./partners.scss";
import Airbnb from "../../../assets/airbnb.png";
import Trip from "../../../assets/tripadvisor.png";
import Viarail from "../../../assets/viarail-logo.png";
import IngLogo from "../../../assets/ing-logo.png";
import SwissAir from "../../../assets/swissair.png";
import Thalys from "../../../assets/thalys.png"

const Partner = () => {
  return (
    <section className="partner__container">
      <div className="partner__content">
        <div className="partners__slider__logo">
          <img src={Airbnb} alt="Airbnb" />
          <img src={Trip} alt="Tripadvisor" />
          <img src={Viarail} alt="Via rail canada" />
          <img src={SwissAir} alt="Swiss Air" />
          <img src={IngLogo} alt="Ing" />
          <img src={Thalys} alt="Thalys" />
        </div>
        <div className="partners__slider__logo">
          <img src={Airbnb} alt="Airbnb" />
          <img src={Trip} alt="Tripadvisor" />
          <img src={Viarail} alt="Via rail canada" />
          <img src={SwissAir} alt="Swiss Air" />
          <img src={IngLogo} alt="Ing" />
          <img src={Thalys} alt="Thalys" />
        </div>
        
        
        
      </div>
    </section>
  );
};

export default Partner;
