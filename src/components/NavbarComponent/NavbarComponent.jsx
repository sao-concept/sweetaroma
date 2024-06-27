// src/components/NavbarComponent/NavbarComponent.jsx

import React, { useContext, useState } from "react";
import "./NavbarComponent.scss";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../contextAPI/StoreContextAPI";
import { AuthContext } from "../../contextAPI/AuthContext";

import { FaBars, FaTimes } from "react-icons/fa";

function NavbarComponent({ setShowLoginPage, setUserData }) {
  const [menunav, setMenunav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { getTotalCartCost } = useContext(StoreContext);
  const { isAuthenticated, signOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignInClick = () => {
    setShowLoginPage(true);
    setIsMenuOpen(false);
  };

  const handleSignOutClick = () => {
    signOut(setUserData);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-comp">
      <Link to="/">
        <img src={assets.logo} alt="company logo" className="comapny-logo" />
      </Link>
      <ul className="navbar-comp-menu">
        <Link
          to="/"
          className={menunav === "home" ? "active" : ""}
          onClick={() => setMenunav("home")}
        >
          home
        </Link>
        <a
          href="#explore-menu-comp"
          className={menunav === "our-menu" ? "active" : ""}
          onClick={() => setMenunav("our-menu")}
        >
          our menu
        </a>
        <a
          href="#app-download-comp"
          className={menunav === "our-mobile-app" ? "active" : ""}
          onClick={() => setMenunav("our-mobile-app")}
        >
          our mobile-app
        </a>
        <a
          href="#footer-comp"
          className={menunav === "contact-us" ? "active" : ""}
          onClick={() => setMenunav("contact-us")}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-comp-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-comp-search-icon">
          <Link to="/cartpage">
            <img src={assets.basket_icon} alt="shopping basket icon" />
          </Link>
          <div
            className={getTotalCartCost() === 0 ? "" : "navbar-comp-dot"}
          ></div>
        </div>
        {isAuthenticated ? (
          <button onClick={handleSignOutClick} className="sign-in-button">
            sign out
          </button>
        ) : (
          <button onClick={handleSignInClick} className="sign-in-button">
            sign in
          </button>
        )}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav>
            <ul>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link
                  to="/"
                  className={menunav === "home" ? "active" : ""}
                  onClick={() => setMenunav("home")}
                >
                  home
                </Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a
                  href="#explore-menu-comp"
                  className={menunav === "our-menu" ? "active" : ""}
                  onClick={() => setMenunav("our-menu")}
                >
                  our menu
                </a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a
                  href="#app-download-comp"
                  className={menunav === "our-mobile-app" ? "active" : ""}
                  onClick={() => setMenunav("our-mobile-app")}
                >
                  our mobile-app
                </a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a
                  href="#footer-comp"
                  className={menunav === "contact-us" ? "active" : ""}
                  onClick={() => setMenunav("contact-us")}
                >
                  contact us
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={isAuthenticated ? handleSignOutClick : handleSignInClick}
          >
            {isAuthenticated ? "sign out" : "sign in"}
          </button>
        </div>
      )}
    </div>
  );
}

export default NavbarComponent;
