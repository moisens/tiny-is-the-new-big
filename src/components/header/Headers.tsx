import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./headers.scss";
import { DataHeaderProps } from "../../types/interface-Headers";
//import Dots from "../../assets/dots.png";

const Headers = ({ dataHeaders }: DataHeaderProps) => {
  const location = useLocation();

  return (
    <header className="header__header">
      {dataHeaders.map((dataheader) => {
        const { id, image, icon, category, title, description } = dataheader;
        const catFirstLetter = category.slice(0, 1).toUpperCase();
        const catLastLetters = category.slice(1);

        return (
          <Fragment key={id}>
            <div className="header__imgContainer">
              <img src={image} alt={category} />
              <div className="header__notification">
                {location.pathname === "/buy"
                  ? "✨ 10 Dream Tiny Homes Sold Today!"
                  : "✨ 20 Tiny Retreats Booked This Month!"}
              </div>
              <div className="header__notification">
                {location.pathname === "/buy"
                  ? "🏠 Your Future Tiny Home Awaits!"
                  : "🤩 Join the Growing Renter's Haven!"}
              </div>
              <div className="header__notification">
                {location.pathname === "/buy"
                  ? "🍀 5 Lucky Buyers Secured Their Tiny Oasis"
                  : "🏠 30 Cozy Getaways Found New Adventurers!"}
              </div>
            </div>

            <div className="header__content">
              <div className="header__icon">
                <div className="icon__icon">{icon}</div>
                <h4 className="category__H4">{`${catFirstLetter}${catLastLetters}`}</h4>
              </div>
              <h2 className="header__H2">{title}</h2>
              <p className="header__description">{description}</p>
            </div>
          </Fragment>
        );
      })}
    </header>
  );
};

export default Headers;
