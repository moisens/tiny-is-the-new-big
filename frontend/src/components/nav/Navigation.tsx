import "./nav.scss";
import { linkNav } from "../../utils/utils";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav__container">
      <div className="logo">Tiny is the new big</div>
      <div className="navlink__content">
        <ul className="nav__ul">
          <div className="nav__li dropdown">Home
            <ul className="nav__ul__dropdown">
              <li className="nav__li__dropdown">About</li>
              <li className="nav__li__dropdown">Services</li>
              <li className="nav__li__dropdown">Contact</li>
            </ul>
          </div>
          {linkNav.map((link) => {
            const { id, text, url } = link;
            return (
              <li className="nav__li" key={id}>
                <Link className="nav__a" to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="menu__like__connect">
        <div className="nav__like">Like</div>
        <div className="nav__connect">🦸‍♂️</div>
        <div className="nav__menu">Menu</div>
      </div>
    </nav>
  );
};

export default Nav;
