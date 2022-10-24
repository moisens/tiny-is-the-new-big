import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Housedata } from "../../types/interface-housedata";
import houseConfiguration from "../../utils/configHouse";
import useFavorite from "../../hooks/useFavorite";
import Button from "../button/Button";

const CardList = ({ productData, statusType }: Housedata) => {
  const { products } = productData;
  const { addToFavorites, removeFromFavorites, favorites } = useFavorite();
  const [liked, setLiked] = useState(false);

  const handleActiveLike = () => {
    setLiked(!liked);
  };

  if (statusType === "pending") return <h2>Loading...</h2>;
  if (statusType === "rejected") throw new Error(statusType); // need to be refactored!

  return (
    <React.Fragment>
      {statusType === "resolved" &&
        products?.map((product) => {
          const {
            _id,
            image,
            country,
            price,
            category,
            size,
            bedroom,
            bathroom,
            reference,
          } = product;
          return (
            <div className="page__card stacked" key={_id}>
              <Link to={`/details-tiny-house/${_id}`}>
                <img
                  src={image[0]}
                  alt={country}
                  title={country}
                  className="card__img"
                />
              </Link>
              <div className="card__like">
              {!liked && favorites ? (
            <Button
              as="button"
              className=""
              handleClick={() => {
                handleActiveLike();
                addToFavorites(product);
                console.log(favorites);
              }}
            >
              <BsHeart />
            </Button>
          ) : (
            <Button
              as="button"
              className=""
              handleClick={() => {
                handleActiveLike();
                //removeFromFavorites(product);
              }}
            >
              <BsHeartFill />
            </Button>
          )}
              </div>
              
              <div className="card__content">
                <div className="card__title">
                  <h4 className="card__H4">{country}</h4>
                </div>
                <div className="card__title">
                  <h4 className="card__H4">
                    <span className="green__span">
                      {category === "rent"
                        ? `€ ${price} / month`
                        : `€ ${price}`}
                    </span>
                  </h4>
                  <span className="green__span">|</span>
                  <h4 className="card__H4">Ref: {reference}</h4>
                </div>
                <div className="card__title">
                  {houseConfiguration(size, bedroom, bathroom)}
                </div>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default CardList;
