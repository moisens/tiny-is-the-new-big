import "./contact.scss";
import { MdOutlineContactPage } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact__container">
      <div className="contact__content">
        <div className="contact__text">
          <div className="contact__illuContainer">
            <MdOutlineContactPage
              size="1rem"
              color="#08A1BA"
              className="contact__illu"
            />
            <h4 className="contact__titleH4">
              Contact <span className="span__title">Us</span>
            </h4>
          </div>
          <h2 className="contact__titleH2">Our rendezvous begins here!</h2>
          <p className="contact__description">
            Broker ipsum dolor sit amet, consectetuer noted architect elit.
            Modern interior commodo ligula eget dolor.
          </p>
        </div>
        <div className="contact__images">
          <div className="image__container">
            <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650301425/tiny%20is%20the%20new%20big/tierra-mallorca-NpTbVOkkom8-unsplash_fcohsm.jpg" alt="" />
          </div>
          <div className="image__container">
            <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650300934/tiny%20is%20the%20new%20big/aysegul-yahsi-9QRqI6RbHWU-unsplash_m3dhn6.jpg" alt="" />
          </div>
          <div className="image__container">
            <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650301404/tiny%20is%20the%20new%20big/jet-dela-cruz-Gf6puSx3h6Y-unsplash_nfndgh.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="form__container">
        <form className ="form__content">
          <div className="input__container">
            <label htmlFor="firstName" />
            <input type="text" placeholder="First name" id="firstName" className="input__input"/>
            <label htmlFor="lastName" />
            <input type="text" placeholder="Last name" id="lastName" className="input__input"/>
          </div>
          <div className="input__container">
            <label htmlFor="country" />
            <select id="country" className="input__input">
              <option value="" className="input__option">Country</option>
              <option value="belgium" className="input__option">Belgium</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="switzerland">Switzerland</option>
              <option value="uk">Uk</option>
            </select>
            <label htmlFor="service" />
            <select id="service" className="input__input">
              <option value="">Choose a service</option>
              <option value="buy">Buy</option>
              <option value="build">Build</option>
              <option value="rent">Rent</option>
              <option value="location">Location</option>
            </select>
          </div>
          <label htmlFor="email" />
          <input type="text" id="email" placeholder="Your email" className="input__email" />
          <label htmlFor="subject" />
          <textarea id="subject" className="input__textarea" />
          <button type="submit" className="form__button">Send</button>
        </form>
        <div className="form__call"></div>
      </div>
    </section>
  );
};

export default Contact;
