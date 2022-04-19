import "./footer.scss";
import { BiMailSend } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  const newYear = new Date().getFullYear();

  return (
    <footer className="footer__container">
      <div className="footer__content">
        <nav className="footer__nav">
          <ul className="footer__ul">
            <li className="footer__li">
              <Link to="/">Home</Link>
            </li>
            <li className="footer__li">
              <Link to="#about">About</Link>
            </li>
            <li className="footer__li">
              <Link to="#services">Services</Link>
            </li>
            <li className="footer__li">
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
          <ul className="footer__ul">
            <li className="footer__li">
              <Link to="/buy">Buy</Link>
            </li>
            <li className="footer__li">
              <Link to="/rent">Rent</Link>
            </li>
            <li className="footer__li">
              <Link to="/location">Locations</Link>
            </li>
            <li className="footer__li">Terms of use</li>
          </ul>
        </nav>
        <div className="footer__newsletterSocial">
          <div className="newsletter">
            <h4 className="newsletter__H4">Subscribe to our newsletter</h4>
            <form className="newsletter__form">
              <label htmlFor="newsletter" />
              <input
                type="text"
                id="newsletter"
                placeholder="lois@outlook.com"
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__button">
                <BiMailSend size="1.8rem" color="#fff" />
              </button>
            </form>
          </div>
          <div className="social__container">
            <div className="social__content">
              <SiLinkedin size="1.4rem" color="#08A1BA" />
            </div>
            <div className="social__content">
              <AiOutlineInstagram size="1.4rem" color="#08A1BA" />
            </div>
            <div className="social__content">
              <FiTwitter size="1.4rem" color="#08A1BA" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__date">
        <AiOutlineCopyrightCircle />
        <p className="date__now">www.tinyroof.com - {`${newYear}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
