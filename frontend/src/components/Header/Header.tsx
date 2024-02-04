import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Header.scss";
import SocialIcons from "../SocialIcons/SocialIcons";

const navList = [
  {
    label: "Restaurants",
    link: "#restaurants",
  },
  {
    label: "Services",
    link: "#services",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container px-3 header-content">
        <a href="/" className="d-flex align-items-center">
          <img
            src="assets/images/animated-logo.gif"
            alt="Logo"
            className="logo"
            style={{ width: 50 }}
          />
          <h2 className="logo-text">CulinaryCompass</h2>
        </a>

        <div className="d-flex align-items-center gap-5">
          <nav className="d-none d-md-block">
            <ul className="d-flex gap-5 nav-list">
              {navList.map((item) => (
                <li key={item.label}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#services">
            <button className="book-table d-none d-md-block">Learn More</button>
          </a>
        </div>
        <CSSTransition
          in={isBurgerMenuOpen}
          timeout={300}
          classNames="burger-menu"
          transTimingFn="ease-out"
          unmountOnExit
        >
          <div className="burger-menu">
            <ul className="d-flex flex-column gap-4 nav-list">
              {navList.map((item) => (
                <li key={item.label} onClick={() => setIsBurgerMenuOpen(false)}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="py-5">
              <SocialIcons />
            </div>
          </div>
        </CSSTransition>

        <img
          src={
            isBurgerMenuOpen
              ? "assets/images/close.svg"
              : "assets/images/menu.svg"
          }
          alt="Menu"
          className="burger-menu-icon d-md-none"
          onClick={() => setIsBurgerMenuOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
};

export default Header;
