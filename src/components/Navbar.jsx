import React from "react";

import { StyledNavbar } from "./Styles/Navbar.style";

const Navbar = ({ toggleMenu }) => {
  return (
    <StyledNavbar>
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="navbar__logo-img">
            <a href="#home">L</a>
          </div>
          <div className="navbar__logo-text">
            <p className="navbar__logo-text1">Lampa</p>
          </div>
        </div>
      </div>
      <div
        className={
          toggleMenu ? "navbar__links navbar__active" : "navbar__links"
        }
      >
        <ul className="navbar__links-ul">
          <li className="navbar__links-li">
            <a href="#home">Home</a>
          </li>
          <li className="navbar__links-li">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="navbar__links-li">
            <a href="#price">Price</a>
          </li>
          <li className="navbar__links-li">
            <a href="#stories">Stories</a>
          </li>
          <li className="navbar__links-li">
            <a href="#milestones">Milestones</a>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
