import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CardDataType } from "../../types/interface-housedata";
import houseConfiguration from "../../utils/configHouse";
import Button from "../button/Button";
import useFavorite from "../../hooks/useFavorite";
import useLikedTinyHouse from "../../hooks/useLiked";

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
  const { addToFavorites, removeFromFavorites } = useFavorite();
  const { getLikedTinyhouse, handleActiveLike } = useLikedTinyHouse();
  const isTinyHouseLiked = getLikedTinyhouse(product);

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
        {!isTinyHouseLiked ? (
          <Button
            as="button"
            className="like__icon"
            handleClick={() => {
              addToFavorites(product), handleActiveLike(product);
            }}
          >
            <BsHeart size="1.9rem" />
          </Button>
        ) : (
          <Button
            as="button"
            className="like__icon"
            handleClick={() => {
              removeFromFavorites(product), handleActiveLike(product);
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
