import "./nav.scss";
import { linkNav } from "../../utils/utils";
import { Link, NavLink } from "react-router-dom";
import Profile from "../../assets/profil.svg";
import Like from "../../assets/like.svg";
import Menu from "../../assets/menu.svg";

const Nav = () => {
  return (
    <nav className="nav__container">
      <div className="logo">Tiny is the new big</div>
      <div className="navlink__content">
        <ul className="nav__ul">
          {linkNav.map((link) => {
            const { id, text, url } = link;
            return (
              <li className="nav__li" key={id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav__a activeLink" : "nav__a"
                  }
                  to={url}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
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
