import { BsHeart } from "react-icons/bs";
import { Locations } from "../../types/interface-Locationsdata";

const LocationList = ({ locationDatas, statusType }: Locations) => {
  const { locations } = locationDatas;
  if (statusType === "pending") return <h2>Loading....</h2>;
  if (statusType === "rejected") throw new Error(statusType);
  return (
    <>
      {statusType === "resolved" &&
        locations?.map((location) => {
          const {
            _id,
            country,
            description,
            image,
            //reviewersImages,
            numOfReviews,
          } = location;
          return (
            <div className="page__card stacked" key={_id}>
              <img
                src={image[0]}
                alt={country}
                title={country}
                className="card__img"
              />
              <div className="card__like">
                <BsHeart size="1.4rem" />
              </div>
              <div className="card__content">
                <div className="card__title">
                  <h4 className="card__H4">{country}</h4>
                </div>
                <div className="card__title">{description.slice(0, 80)}</div>
                <div className="card__title">
                  <p>imgs</p>
                  <p>{numOfReviews}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default LocationList;
