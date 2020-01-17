import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container" to="/">
          <Logo />
        </div>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
