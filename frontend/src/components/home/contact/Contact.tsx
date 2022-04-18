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
          <h2 className="contact__titleH2">Easy to contact.</h2>
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
      <div className="contact__form">Form</div>
    </section>
  );
};

export default Contact;
