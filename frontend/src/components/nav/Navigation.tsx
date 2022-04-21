import "./nav.scss";
import { linkNav } from "../../utils/utils";
import Profile from "../../assets/profil.svg";
import Like from "../../assets/like.svg";
import Menu from "../../assets/menu.svg";
import LinkList from "./LinkList";
import { NavLink, Link } from "react-router-dom";
import { RiArrowDownSFill } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="nav__container sticky__nav">
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
            <RiArrowDownSFill className="nav__arrowdown" color="#08A1BA" />
          </li>
          <LinkList linksData={linkNav} />
        </ul>
        {/*dropdown links for Home page*/}
        <ul className="nav__dropdown">
          <li className="dropdown__li"><a href="/#about">About</a></li>
          <li className="dropdown__li"><a href="/#service">Services</a></li>
          <li className="dropdown__li"><a href="/#location">Locations</a></li>
          <li className="dropdown__li"><a href="/#contact">Contact</a></li>
        </ul>
        {/*End dropdown links for Home page*/}
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
