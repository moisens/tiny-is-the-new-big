import { BsHeart, BsHeartFill } from "react-icons/bs";
import { CardProps } from "../../types/interface-housedata";

const InfoHouse = () => {
  return (
    <section className="info__container">
      <div className="info__content">
        <div className="info__info">
          <div className="info__element">
            <p className="info__boldtext">Rent</p>
          </div>
          <div className="info__element">
            <p className="info__boldtext">800/month</p>
          </div>
          <div className="info__element info__icon">
            <BsHeart />
          </div>
        </div>
        <div className="info__description">
          <h5 className="info__titleH5">Description</h5>
          <p>
            Modus stainless steel doctus ea vis, sed luxury democritum at, vidit
            cozy partiendo mel cu. Vel an one-of-a-kind utroque antiopam, ius ad
            falli location location location suavitate. No Carrara marble
            persius mei, no historic dolor maiestatis adolescens.
          </p>
        </div>
      </div>
      <div className="info__content">
        <div className="info__info">
          <div className="info__element">
            <p className="info__boldtext">Ref: UK-1099</p>
          </div>
          <div className="info__element">
            <p className="info__boldtext">United kingdom</p>
          </div>
        </div>
        <div className="info__textcontent">
          <div>
            <h5 className="info__titleH5">configuration</h5>
            <p>Bedroom: 1</p>
            <p>Bathroom: 1</p>
            <p>Kitchen: 1</p>
            <p>Living room: 1</p>
            <p>Size: 1</p>
          </div>
          <div>
            <h5 className="info__titleH5">Recap</h5>
            <p>Price: 800€/month</p>
            <p>Ref: UK-1099</p>
            <p>Country: Uk</p>
            <p>Type: Tiny house</p>
            <p>State of the house: used</p>
            <p>Built: Feb 2021</p>
          </div>
        </div>
      </div>
      <div className="info__content info__energydata">
        <h5 className="info__titleH5">Energy data</h5>
        <p>
          Energy class: <span className="energy__classA">A</span>
        </p>
        <p>PEB unique code: 20711406000897260-22-6</p>
        <p>E-spec: 686 Kwh/m2/year</p>
        <p>Type of heating: fuel oil</p>
      </div>
      <div className="info__content info__contact">
        <h5 className="info__titleH5">Are you interested in this tiny house?</h5>
        <button className="info__button">Contact</button>
      </div>
    </section>
  );
};

export default InfoHouse;
