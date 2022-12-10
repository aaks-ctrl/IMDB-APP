import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../logo.png'
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="headerRight">
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <div>Popular</div>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <div>Rated</div>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <div>Upcoming</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
