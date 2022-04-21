import "./nav.scss";
import { linkNav } from "../../utils/utils";
import Profile from "../../assets/profil.svg";
import Like from "../../assets/like.svg";
import Menu from "../../assets/menu.svg";
import LinkList from "./LinkList";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav__container">
      <div className="logo">tinyhousing</div>
      <div className="navlink__content">
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav__a activeLink" : "nav__a"
              }
            >
              Home
            </NavLink>
          </li>
          <LinkList linksData={linkNav} />
          <li>Contact</li>
        </ul>
      </div>
      <div className="menu__like__connect">
        <div className="nav__like">
          <img src={Like} alt="like" />
        </div>
        <div className="nav__connect">
          <img src={Profile} alt="profile" />
        </div>
        <div className="nav__menu">
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
