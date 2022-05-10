import React from "react";
import "./headers.scss";

//export interface BaseProps {
//  children: React.ReactNode;
//}

export interface DataHeaderProps {
  dataHeaders: {
    id: string;
    image: string;
    icon: JSX.Element;
    category: string;
    title: string;
    description: string;
  }[];
}

//export type HeaderProps = DataHeaderProps;

const Headers = ({ dataHeaders }: DataHeaderProps) => {
  return (
    <header className="header__header">
      {dataHeaders.map((dataheader) => {
        const { id, image, icon, category, title, description } = dataheader;
        return (
          <React.Fragment key={id}>
            <div className="header__imgContainer">
              <img src={image} alt={category} />
              <div className="header__notification">1</div>
              <div className="header__notification">2</div>
              <div className="header__notification">3</div>
            </div>
            <div className="header__content">
              <div className="header__icon">
                <div className="icon__icon">{icon}</div>
                <h4 className="category__H4">{category}</h4>
              </div>
              <h2 className="header__H2">{title}</h2>
              <p className="header__description">{description}</p>
            </div>
          </React.Fragment>
        );
      })}
    </header>
  );
};

export default Headers;
