import "./about.scss";
import { founders } from "../../../utils/utils";
import Founders from "./Founders";
import { FaBuilding } from "react-icons/fa";

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__image">
        <img
          src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1649889608/tiny%20is%20the%20new%20big/jed-owen-BpT50qq5ySw-unsplash_cyrqlr.jpg"
          alt="about-company"
          title="About us"
        />
        <div className="about__exp">
          <p className="about__exp__P">
            We have 5 years of experience, you can find us in Belgium, Canada,
            Australia, Switzerland and Uk.
          </p>
        </div>
        <div className="about__slider">
          <div className="slider__container">
            <Founders foundersItems={founders} />
          </div>
        </div>
      </div>

      <div className="about__text__content">
        <div className="about__company">
          <div className="company__illu">
            <FaBuilding size="1.5rem" color="#8db530" />
          </div>
          <h4 className="about__title__H4">
            What our  <span className="span__title">company propose?</span>
          </h4>
        </div>
        <div className="about__desc">
          <h2 className="about__title__H2">
            A new way of housing that satisfies your life style, wallet and the
            environment.
          </h2>
          <p className="about__description__P">
            Living in a tiny house has numerous benefits, both for the
            individual and for the environment. Tiny houses use less energy and
            resources to build and maintain, which means a smaller carbon
            footprint and reduced costs for the homeowner. They also encourage a
            simpler, more minimalist lifestyle, leading to less clutter and
            waste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
