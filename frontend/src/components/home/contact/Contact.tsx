import "./contact.scss";
import { MdOutlineCall } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

import { pohoneNumbers } from "../../../utils/form-utils";
import { contactData } from "../../../utils/multi-img-utils";
import SelectServices from "./Dropdown";
import ContactImgList from "./ContactImgList";
import FormMail from "./FormMail";

const Contact = () => {
  return (
    <section className="contact__container" id="contact">
      <div className="contact__content">
        <div className="contact__text">
          <div className="contact__illuContainer">
            <div className="contact__illu">
              <MdContactPage size="1.8rem" color="#8db530" />
            </div>

            <h4 className="contact__titleH4">
              Contact <span className="span__title">Us</span>
            </h4>
          </div>
          <h2 className="contact__titleH2">Our rendez-vous begins here!</h2>
          <p className="contact__description">
            Take the first step towards a more sustainable and fulfilling
            lifestyle by considering a tiny house from our selection. Contact us
            today to learn more and schedule a tour.
          </p>
        </div>
        <div className="contact__images">
          <ContactImgList contactData={contactData} />
        </div>
      </div>
      <div className="form__container">
        <FormMail />
        <div className="form__call">
          <div className="form__callContent">
            <button className="call__btn">
              <MdOutlineCall color="fff" size="1.8rem" />
              Call now
            </button>
            <div className="input__container">
              <SelectServices dataDropdownList={pohoneNumbers} />
            </div>
          </div>
          <div className="social__container">
            <div className="social__content">
              <Link to="#">
                <SiLinkedin />
              </Link>
            </div>
            <div className="social__content">
              <Link to="#">
                <AiOutlineInstagram />
              </Link>
            </div>
            <div className="social__content">
              <Link to="#">
                <FiTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__triangle2"></div>
    </section>
  );
};

export default Contact;
