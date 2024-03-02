import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Housedata } from "../../types/interface-housedata";
import useFavorite from "../../hooks/useFavorite";
import useLikedTinyHouse from "../../hooks/useLiked";

const InfoHouse = ({ productData, status, error }: Housedata) => {
  const { product } = productData;

  const { addToFavorites, removeFromFavorites } = useFavorite();

  const { getLikedTinyhouse, handleActiveLike } = useLikedTinyHouse();
  const isTinyHouseLiked = getLikedTinyhouse(product);

  const catUpper = product?.category.slice(0, 1).toUpperCase();
  const restCat = product?.category.slice(1);
  const category = `${catUpper}${restCat}`;

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error;

  return (
    <>
      {status === "resolved" ? (
        <section className="info__container">
          <div className="info__content">
            <div className="info__info">
              <div className="info__element">
                <p className="info__boldtext">{category}</p>
              </div>
              <div className="info__element">
                <p className="info__boldtext">
                  {product?.category === "rent"
                    ? `${product?.price} €/month`
                    : `${product?.price} €`}
                </p>
              </div>
              <div className="info__element info__icon">
                {!isTinyHouseLiked ? (
                  <BsHeart
                    onClick={() => {
                      addToFavorites(product), handleActiveLike(product);
                    }}
                  />
                ) : (
                  <BsHeartFill
                    onClick={() => {
                      removeFromFavorites(product), handleActiveLike(product);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="info__description">
              <h5 className="info__titleH5">Description</h5>
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="info__content">
            <div className="info__info">
              <div className="info__element">
                <p className="info__boldtext">Ref: {product?.reference}</p>
              </div>
              <div className="info__element">
                <p className="info__boldtext">{product?.country}</p>
              </div>
            </div>
            <div className="info__textcontent">
              <div>
                <h5 className="info__titleH5">configuration</h5>
                <p>
                  <span className="info__weight">Bedroom:</span>{" "}
                  {product?.bedroom}
                </p>
                <p>
                  <span className="info__weight">Bathroom:</span>{" "}
                  {product?.bathroom}
                </p>
                <p>
                  <span className="info__weight">Kitchen:</span>{" "}
                  {product?.kitchen}
                </p>
                <p>
                  <span className="info__weight">Living room:</span>{" "}
                  {product?.livingroom}
                </p>
                <p>
                  <span className="info__weight">Size:</span> {product?.size}{" "}
                  sqft
                </p>
              </div>
              <div>
                <h5 className="info__titleH5">Recap</h5>
                <p>
                  <span className="info__weight">Price:</span>{" "}
                  {product?.category === "rent"
                    ? `${product?.price} €/month`
                    : `${product?.price} €`}
                </p>
                <p>
                  <span className="info__weight">Ref:</span>{" "}
                  {product?.reference}
                </p>
                <p>
                  <span className="info__weight">Country:</span>{" "}
                  {product?.country}
                </p>
                <p>
                  <span className="info__weight">State of the house:</span>{" "}
                  {product?.statusofhouse}
                </p>
                <p>
                  <span className="info__weight">Built:</span>{" "}
                  {product?.yearofconstruction}
                </p>
              </div>
            </div>
          </div>
          <div className="info__content info__energydata">
            <h5 className="info__titleH5">Energy data</h5>
            <p>
              <span className="info__weight">Energy class:</span>{" "}
              <span className="energy__classA">{product?.energyclass}</span>
            </p>
            <p>
              <span className="info__weight">PEB unique code:</span>{" "}
              {product?.pebuniquecode}
            </p>
            <p>
              <span className="info__weight">E-spec:</span> {product?.espec}
            </p>
            <p>
              <span className="info__weight">Type of heating:</span>{" "}
              {product?.typeofheating}
            </p>
          </div>
          <div className="info__content info__contact">
            <h5 className="info__titleH5">
              Are you interested in this tiny house?
            </h5>
            <form className="info__form">
              <div className="info__input">
                <label htmlFor="firstname" />
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your name"
                />
                <label htmlFor="lastname" />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your lastname"
                />
              </div>
              <div className="info__input">
                <label htmlFor="email" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <label htmlFor="reference" />
                <input
                  type="text"
                  name="reference"
                  placeholder="Enter the reference"
                />
              </div>
              <textarea
                name="subject"
                cols={30}
                rows={5}
                placeholder="Subject..."
                className="info__textarea"
              ></textarea>
            </form>
            <button className="info__button">Schedule a rendez-vous</button>
          </div>
        </section>
      ) : null}
      {/* //TODO: Add a fallback component instead of null!  */}
    </>
  );
};

export default InfoHouse;
