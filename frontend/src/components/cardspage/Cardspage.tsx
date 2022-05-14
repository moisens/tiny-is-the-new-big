import "./cardspage.scss";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoIosQrScanner } from "react-icons/io";
import { MdOutlineShower, MdOutlineBed } from "react-icons/md";
import Button from "../button/Button";

const CardsPage = () => {
  return (
    <section className="page__container">
      <div className="page__triangle1"></div>
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*First Card*/}
          <div className="page__card stacked">
            <img
              src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1652195541/tiny-housing/tmp-1-1652195541257_wc0bsm.jpg"
              alt="card"
              className="card__img"
            />
            <div className="card__like">
              <BsHeart size="1.4rem" />
            </div>
            <div className="card__content">
              <div className="card__title">
                <h4 className="card__H4">Tiny house 1</h4>
                <h4 className="card__H4">Canada ON</h4>
              </div>
              <div className="card__title">
                <h4 className="card__H4">
                  <span className="green__span">100000€</span>
                </h4>
                <span className="green__span">|</span>
                <h4 className="card__H4">Ref: 1099</h4>
              </div>
              <div className="card__title">
                <div className="card__item">
                  <IoIosQrScanner size="1.4rem" />
                  <p className="card__P">344,445 sqft</p>
                </div>
                <div className="card__item">
                  <MdOutlineBed size="1.4rem" />
                  <p className="card__P">2</p>
                </div>
                <div className="card__item">
                  <MdOutlineShower size="1.4rem" />
                  <p className="card__P">1</p>
                </div>
              </div>
            </div>
          </div>
          {/*End First Card*/}
        </div>
        <div className="page__triangle2"></div>
      </div>
      <div className="lodmore__container">
        <Button
          className="lodmore__btn"
          as="button"
          handleClick={() => {
            console.log("clicked");
          }}
        >
          load more
        </Button>
      </div>
    </section>
  );
};

export default CardsPage;
