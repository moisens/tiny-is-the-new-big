import { CardDataLocationType } from "../../types/interface-Locationsdata";

const LocationsList = ({
  location,
  index,
  value,
  setValue,
}: CardDataLocationType) => {
  const { image, country, description, numOfReviews, reviewersImages } =
    location;

  return (
    <div
      className="card__Info"
      onClick={() => (setValue ? setValue(index) : undefined)}
    >
      {/*🤓In interface-Locationsdata types file, setValue is optional
       *Which means that setValue is possibily undefined
       *So I need to check if setValue is defined before updating it!
       *Also, I need it to be optional in the types file, it is in CardDataLocationType type
       *which I ise in an other component without passing setValue!
       */}
      <img
        src={image[0]}
        alt={country}
        title={country}
        className={index === value ? "cardloc__img active" : "cardloc__img"}
      />
      <div className="cardloc__content">
        <div className="cardloc__title">
          <h4 className="cardloc__H4">{country}</h4>
        </div>
        <p className="cardloc__description">{description.slice(0, 80)}</p>
        <div className="cardloc__reviews">
          <div className="cardloc__reviewers">
            {reviewersImages?.map((revImg, index) => (
              <div key={index}>
                {/*NEED TO REFACTOR. BAD DON'T USE INDEX HERE*/}
                <img src={revImg} />
              </div>
            ))}
          </div>
          <div className="cardloc__rating">
            ★<p className="cardloc__p">{numOfReviews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsList;
