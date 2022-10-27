import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CardDataType } from "../../types/interface-housedata";
import houseConfiguration from "../../utils/configHouse";
import useFavorite from "../../hooks/useFavorite";
import Button from "../button/Button";

const CardList = ({ product }: CardDataType) => {
  const {
    _id,
    image,
    country,
    price,
    category,
    reference,
    size,
    bedroom,
    bathroom,
  } = product;

  const { addToFavorites, removeFromFavorites, favorites } = useFavorite();
  const [liked, setLiked] = useState(false);

  const handleActiveLike = () => {
    setLiked(!liked);
  };

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
        {!liked ? (
          <Button
            as="button"
            className="like__icon"
            handleClick={() => {
              handleActiveLike();
              addToFavorites(product);
              console.log("Add: ", favorites);
            }}
          >
            <BsHeart size="1.9rem" />
          </Button>
        ) : (
          <Button
            as="button"
            className="like__icon"
            handleClick={() => {
              handleActiveLike();
              removeFromFavorites(product);
              console.log("Remove: ", favorites);
            }}
          >
            <BsHeartFill size="1.9rem" />
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
              {category === "rent" ? `${price} €  / month` : ` ${price} €`}
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
};

export default CardList;
