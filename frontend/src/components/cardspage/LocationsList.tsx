import { BsHeart } from "react-icons/bs";
import { CardDataLocationType } from "../../types/interface-Locationsdata";

const LocationsList = ({ location }: CardDataLocationType) => {
  return (
    <div>
      <img
        src={location.image[0]}
        alt={location.country}
        title={location.country}
        className="card__img"
      />
      <div className="card__like">
        <BsHeart size="1.4rem" />
      </div>
      <div className="card__content">
        <div className="card__title">
          <h4 className="card__H4">{location.country}</h4>
        </div>
        <div className="card__title">{location.description.slice(0, 80)}</div>
        <div className="card__title">
          <p>imgs</p>
          <p>{location.numOfReviews}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationsList;
