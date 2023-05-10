import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import logo from "../../assets/tmovie.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${"https://wallpapers.com/images/featured/9pvmdtvz4cb0xl37.jpg"})`,
      }}
    >
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img
              src={logo}
              alt=""
              style={{ filter: "drop-shadow(0 0 16px red) invert(99%)" }}
            />
            <Link to="/filmsero/">Filmsero</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          {/* <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
