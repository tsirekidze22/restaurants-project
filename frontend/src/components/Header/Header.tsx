import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Header.scss";

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container px-3 header-content">
        <a href="/">
          <img src="assets/images/logo2.png" alt="Logo" className="logo" />
        </a>

        <nav className="d-none d-md-block">
          <ul className="d-flex gap-5 nav-list">
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <CSSTransition
          in={isBurgerMenuOpen}
          timeout={300}
          classNames="burger-menu"
          transTimingFn="ease-out"
          unmountOnExit
        >
          <div className="burger-menu">
            <ul className="d-flex flex-column gap-4 nav-list">
              <li>
                <a href="#">Restaurants</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </CSSTransition>
        <button className="book-table d-none d-md-block">Book a Table</button>

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
