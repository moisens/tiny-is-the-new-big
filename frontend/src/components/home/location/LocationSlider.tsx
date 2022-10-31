import { AiFillStar } from "react-icons/ai"
import { Locations } from "../../../types/interface-Locationsdata";

const LocationSlider = ({ locationDatas, statusType }: Locations) => {
  const { locations } = locationDatas;
  if (statusType === "pending") return <h2>Loading...</h2> 
  if (statusType === "rejected") throw new Error(statusType)

  return (
    <>
      {statusType === "resolved" && locations?.map(location => {
        const { _id, country, description, image, reviewersImages, averageRating, numOfReviews } = location;
        return (
          <div className="slider__content" key={_id}>
<div className="slider__imgText">
  <div className="slider__img">
    <img
      src={image[0]}
      alt={country}
      title={country}
    />
  </div>
  <div className="slider__text">
    <h3 className="title__H3">{country}</h3>
    <p className="slider__description">{description.slice(0, 90)}</p>
    <div className="review__container">
      <div className="review__images">
        <div className="review__img">
          <img
            src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1649899897/tiny%20is%20the%20new%20big/christopher-campbell-rDEOVtE7vOs-unsplash_vnbxj5.jpg"
            alt="avatar"
          />
        </div>
        <div className="review__img">
          <img
            src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1649902871/tiny%20is%20the%20new%20big/jake-nackos-IF9TK5Uy-KI-unsplash_cjx1sp.jpg"
            alt="avatar"
          />
        </div>
        <div className="review__img">
          <img
            src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650073476/tiny%20is%20the%20new%20big/kal-visuals-t_z2UegYC-g-unsplash_hn7glw.jpg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="review__starText">
        <div className="review__star">
          <AiFillStar size="1.5rem" color="#f7c34b" />
        </div>
        <p className="review__P">{numOfReviews} ({averageRating} reviews)</p>
      </div>
    </div>
  </div>
</div>
</div>
        );
      })}
    </>
    
  );
};

export default LocationSlider;
