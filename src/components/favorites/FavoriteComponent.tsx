import "./favorite.scss";
import Button from "../button/Button";
import { MdOutlineArrowLeft } from "react-icons/md";
import useFavorite from "../../hooks/useFavorite";
import { Link, useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import houseConfiguration from "../../utils/configHouse";

const FavoriteComponent = () => {
  const navigate = useNavigate();
  const { favorites, removeFromFavorites } = useFavorite();

  return (
    <header className="favorite__header">
      <Button
        as="button"
        className="favorite__button"
        handleClick={() => navigate(-1)}
      >
        <MdOutlineArrowLeft size="2rem" className="btn__icon" />
        Previous page
      </Button>
      <section className="btn__container">
        <span className="btn__count">
          {`${
            favorites.length > 1
              ? "Favorites tiny houses"
              : "Favorite tiny house"
          }`}{" "}
          ({favorites.length})
        </span>
      </section>
      <section className="cards__container">
        <article className="favorite__cards">
          {favorites.length >= 1 ? (
            favorites?.map((favorite) => {
              const {
                _id,
                country,
                price,
                category,
                reference,
                size,
                bedroom,
                bathroom,
                image,
              } = favorite;
              return (
                <div className="card__favorite stacked" key={_id}>
                  <Link to={`/details-tiny-house/${_id}`}>
                    <img
                      src={image[0]}
                      alt={country}
                      title={country}
                      className="card__img"
                    />
                  </Link>

                  <div className="card__like">
                    <Button
                      as="button"
                      className="like__icon"
                      handleClick={() => removeFromFavorites(favorite)}
                    >
                      <FiTrash2 size="1.9rem" />
                    </Button>
                  </div>
                  <div className="card__content">
                    <div className="card__title">
                      <h4 className="card__H4">{country}</h4>
                    </div>
                    <div className="card__title">
                      <h4 className="card__H4">
                        <span className="green__span">
                          {category === "rent"
                            ? `${price} €  / month`
                            : ` ${price} €`}
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
            })
          ) : (
            <div>No favorite tiny houses</div>
          )}
        </article>
      </section>
    </header>
  );
};

export default FavoriteComponent;
