import React from "react";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Housedata } from "../../types/interface-housedata";
import houseConfiguration from "../../utils/configHouse";

const CardList = ({ productData, statusType }: Housedata) => {
  const { products } = productData;
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
            <Link to={`/details-tiny-house/${_id}`} key={_id}>
              <div className="page__card stacked">
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
                    {category === "rent" || category === "buy" ? (
                      houseConfiguration(size, bedroom, bathroom)
                    ) : (
                      <>Location component goes here</>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </React.Fragment>
  );
};

export default CardList;

/*
<Link to={`/details-tiny-house/${_id}`} key={_id}>
              <div className="page__card stacked">
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
                  <div className="card__title">
                    <h4 className="card__H4">
                      <span className="green__span">
                        {category === "rent"
                          ? `€ ${price} / month`
                          : `€ ${price}`}
                      </span>
                    </h4>
                    <span className="green__span">|</span>
                    <h4 className="card__H4">Ref: {ref}</h4>
                  </div>
                  <div className="card__title">
                    {category === "rent" || category === "buy" ? (
                      houseConfiguration(size, bedroom, bathroom)
                    ) : (
                      <>Location component goes here</>
                    )}
                  </div>
                </div>
              </div>
            </Link>
*/
