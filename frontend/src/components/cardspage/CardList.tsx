//import "./cardspage.scss";
import React from "react";
import { BsHeart } from "react-icons/bs";
import { IoIosQrScanner } from "react-icons/io";
import { MdOutlineBed, MdOutlineShower } from "react-icons/md";
import { CardProps } from "../../types/interface-Dataproducts";

const CardList = ({ data, status, error }: CardProps) => {
  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error;

  return (
    <React.Fragment>
      {status === "resolved" &&
        data.slice(0, 9).map((product) => {
          const {
            _id,
            name,
            country,
            price,
            ref,
            size,
            bedroom,
            bathroom,
            image,
            category,
          } = product;
          return (
            <div className="page__card stacked" key={_id}>
              <img
                src={image[0]}
                alt={name}
                title={name}
                className="card__img"
              />
              <div className="card__like">
                <BsHeart size="1.4rem" />
              </div>
              <div className="card__content">
                <div className="card__title">
                  <h4 className="card__H4">{name}</h4>
                  <h4 className="card__H4">{country}</h4>
                </div>
                <div className="card__title">
                  <h4 className="card__H4">
                    <span className="green__span">
                      {category === "rent" ? `€${price}/month` : `€${price}`}
                    </span>
                  </h4>
                  <span className="green__span">|</span>
                  <h4 className="card__H4">Ref: {ref}</h4>
                </div>
                <div className="card__title">
                  <div className="card__item">
                    <IoIosQrScanner size="1.4rem" />
                    <p className="card__P">{size} sqft</p>
                  </div>
                  <div className="card__item">
                    <MdOutlineBed size="1.4rem" />
                    <p className="card__P">{bedroom}</p>
                  </div>
                  <div className="card__item">
                    <MdOutlineShower size="1.4rem" />
                    <p className="card__P">{bathroom}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default CardList;
