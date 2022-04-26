import Button from "../../button/Button";
import "./header.scss";

const Header = () => {
  return (
    <header className="header__container">
      <section className="header__content__text">
        <h1 className="header__title">Your dream tiny house awaits.</h1>
        <p className="header__description">
          Housing made easy. tinyhousing offers you the possibility to
          buy, rent tiny houses. We also help you to find a location for your
          beautiful eco-friendly tiny home.
        </p>
        <div className="header__btn__container">
          <Button className="header__btns" as="a" href="/buy">
            Buy
          </Button>
          <Button className="header__btns" as="a" href="/rent">
            Rent
          </Button>
          <Button className="header__btns" as="a" href="/location">
            Location
          </Button>
        </div>
      </section>
      <section className="header__content__image">
        <div className="header__img">
          <img
            src={
              "https://res.cloudinary.com/dr7qigh2d/image/upload/v1649812416/tiny%20is%20the%20new%20big/andrea-davis-nbI8gqbBaHo-unsplash_yddx2k.jpg"
            }
            alt=""
          />
          <div className="header__notifications">1</div>
          <div className="header__notifications">2</div>
          <div className="header__notifications">3</div>
        </div>
      </section>
    </header>
  );
};

export default Header;
