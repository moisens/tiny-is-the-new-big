import "./about.scss";
import Company from "../../../assets/company.svg";
import Button from "../../button/Button";
import { founders } from "../../../utils/utils";

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__image__content">
        <div className="about__image">
          <img
            src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1649889608/tiny%20is%20the%20new%20big/jed-owen-BpT50qq5ySw-unsplash_cyrqlr.jpg"
            alt="about-company"
            title="About us"
          />
        </div>
        <div className="about__exp">
          <p className="about__exp__P">
            We have 5 years of experience, you can find us in Belgium, Canada,
            Australia, Switzerland and Uk.
          </p>
        </div>
        <div className="about__slider">
          <div className="slider__container">
            {/*Map from here*/}
            {founders.map((founder) => {
              const { id, name, title, image, icons, contact } = founder;
              return (
                <div className="about__slide" key={id}>
                  <div className="slider__img">
                    <div className="about__avatar">
                      <img src={image} alt={name} title={name} />
                    </div>
                    <p className="about__person">
                      {name}
                      <span className="about__position">{title}</span>
                    </p>
                  </div>
                  <div className="slider__btn">
                    <div className="about__stars">
                      {icons.map((stars) => (
                        <div key={stars.id}>{stars.star}</div>
                      ))}
                    </div>
                    <div className="about__contact">
                      <Button className="about__a" as="a" href="#contact">
                        {contact}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            {/*End*/}
          </div>
        </div>
      </div>
      <div className="about__text__content">
        <div className="about__company">
          <div className="company__illu">
            <img src={Company} alt="company" />
          </div>
          <h4 className="about__title__H4">
            About <span className="span__title">Our company</span>
          </h4>
        </div>
        <div className="about__desc">
          <h2 className="about__title__H2">
            A new way of housing that satisfies your life style, wallet and the
            environment.
          </h2>
          <p className="about__description__P">
            Modus stainless steel doctus ea vis, sed luxury democritum at, vidit
            cozy partiendo mel cu. Vel an one-of-a-kind utroque antiopam, ius ad
            falli location location location suavitate. No Carrara marble
            persius mei, no historic dolor maiestatis adolescens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

/*

<div className="about__slide">
              <div className="slider__img">
                <div className="about__avatar">
                  <img
                    src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1649899897/tiny%20is%20the%20new%20big/christopher-campbell-rDEOVtE7vOs-unsplash_vnbxj5.jpg"
                    alt="avatar"
                  />
                </div>
                <p className="about__person">
                  Kyra Nerys <span className="about__position">Co-founder</span>
                </p>
              </div>
              <div className="slider__btn">
                <div className="about__stars">
                  <img src={FilledStar} alt="stars" />
                  <img src={FilledStar} alt="stars" />
                  <img src={FilledStar} alt="stars" />
                  <img src={FilledStar} alt="stars" />
                  <img src={FilledStar} alt="stars" />
                </div>
                <div className="about__contact">
                <Button
                  className="about__a"
                  as="a"
                  href="#contact"
                >Contact</Button>
                </div>
              </div>
            </div>

*/
