import "./location.scss";
import { BsFillGeoAltFill } from "react-icons/bs";
import World from "../../../assets/world.png";
import Button from "../../../components/button/Button";
import { LocationDataType } from "../../../types/interface-Locationsdata";
import { StatusType } from "../../../types/interface-housedata";
import LocationSlider from "./LocationSlider";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

const Location = () => {
  const {
    dataHouse: locations,
    status,
    error,
  } = useFetch<LocationDataType>(
    "https://tinyhousing-backend-ezprh.ondigitalocean.app/api/v1/locations"
  );

  return (
    <section className="location__container" id="location">
      <div className="location__content">
        <div className="location__text">
          <div className="illu__container">
            <div className="location__illu">
              <BsFillGeoAltFill size="1.8rem" color="#8db530" />
            </div>
            <h4 className="title__H4">
              Our <span className="span__title">Locations</span>
            </h4>
          </div>
          <h2 className="title__H2">
            We will help you find a good place where you will settle.
          </h2>
          <p className="location__P">
            In addition to being environmentally friendly, tiny houses offer a
            unique and cozy living experience. With their compact size, they can
            be placed on any piece of land, including in urban areas where space
            is limited. This allows for flexibility in where you choose to live,
            whether it be in the heart of the city or in a peaceful countryside
            setting.
          </p>
          <div className="location__btn">
            <Button className="location__a" as="a" href="/location">
              All the locations
            </Button>
          </div>
        </div>
        <div className="location__slider">
          <div className="slider__container">
            <LocationSlider
              locationDatas={locations}
              statusType={status}
              error={error}
            />
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
