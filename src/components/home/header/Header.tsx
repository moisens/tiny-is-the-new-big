import Button from "../../button/Button";
import "./header.scss";

const Header = () => {
  return (
    <header className="header__container">
      <section className="header__content__text">
        <h1 className="header__title">Your dream tiny house awaits.</h1>
        <p className="header__description">
          Housing made easy - discover the benefits of tiny house living and
          find your dream home with our wide selection of tiny houses for sale
          or rent.
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
      <div className="header__img">
        <img
          src={
            "https://res.cloudinary.com/dr7qigh2d/image/upload/v1649812416/tiny%20is%20the%20new%20big/andrea-davis-nbI8gqbBaHo-unsplash_yddx2k.jpg"
          }
          alt="tiny-house-presentation"
        />
        <div className="header__notifications">
          😍 50 Families Found Tiny Paradise Here!
        </div>
        <div className="header__notifications">
          🙂 100+ Happy Homeowners and Counting!
        </div>
        <div className="header__notifications">
          🙌 Over 15,000 Visitors Love Our Tiny houses
        </div>
      </div>
    </header>
  );
};

export default Header;
