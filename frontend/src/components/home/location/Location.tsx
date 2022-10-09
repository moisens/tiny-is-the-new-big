import "./location.scss";
import PinLocation from "../../../assets/location.svg";
import FilledStar from "../../../assets/filled-star.svg";
import World from "../../../assets/world.png";
import Button from "../../../components/button/Button"
import { LocationDataType } from "../../../types/interface-Locationsdata";
import { StatusType } from "../../../types/interface-housedata";
import LocationSlider from "./LocationSlider";
import { useEffect, useState } from "react";


interface IsFetchingError {
  message: string;
}

const isError = (error: unknown): error is IsFetchingError => {
  if (error && typeof error === "object" && "message" in error) {
    return true;
  }
  return false;
};






const Location = () => {
  const [datas, setDatas] = useState<LocationDataType>({} as LocationDataType);
const [status, setStatus] = useState<StatusType>("iddle");
const [error, setError] = useState<unknown>(null);

const fetchHouses = async () => {
  try {
    setStatus("pending");
    const response = await fetch(`/api/v1/locations`);
    if (!response.ok) {
      throw new Error(`unable to fetch data!`);
    }
    const jsonhouse = await response.json();
    setStatus("resolved");
    setDatas(jsonhouse);
  } catch (error) {
    if (isError(error)) {
      setError(error.message);
      setStatus("rejected");
      console.log(error);
    }
  }
};

useEffect(() => {
  fetchHouses();
}, []);

  return (
    <section className="location__container" id="location">
      <div className="location__triangle1"></div>
      <div className="location__content">
        <div className="location__text">
          <div className="illu__container">
            <div className="location__illu">
              <img src={PinLocation} alt="location" />
            </div>
            <h4 className="title__H4">
              Our <span className="span__title">Locations</span>
            </h4>
          </div>
          <h2 className="title__H2">
            We will help you find a good place where you will settle.
          </h2>
          <p className="location__P">
            Easily move your Tiny House to a more profitable area with its
            towing system. Living with less, means moving towards a future with
            reduced environmental impact.
          </p>
          <div className="location__btn">
            <Button className="location__a" as="a" href="/location">All the locations</Button>
          </div>
        </div>
        <div className="location__slider">
          <div className="slider__container">
            <LocationSlider locationDatas={datas} statusType={status} />
            
            
            
          </div>
        </div>
      </div>
      <div className="location__map">
        <img src={World} alt="" />
      </div>
    </section>
  );
};

export default Location;



/*

<div className="slider__content">
<div className="slider__imgText">
  <div className="slider__img">
    <img
      src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650073308/tiny%20is%20the%20new%20big/andy-holmes-XZ8AiqUcbD8-unsplash_aqtwg8.jpg"
      alt="location"
      title="location_name"
    />
  </div>
  <div className="slider__text">
    <h3 className="title__H3">British Columbia Canada</h3>
    <p className="slider__description">
      magnis dis downtown loft montes, nascetur soaring views mus.
    </p>
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
          <img src={FilledStar} alt="star" />
        </div>
        <p className="review__P">5 (10 reviews)</p>
      </div>
    </div>
  </div>
</div>
</div>

*/