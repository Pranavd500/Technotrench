import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">TechnoTrench</Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>

        <li>
          <Link to="/footer" className="navbar-links">
            Verification
          </Link>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className={`mobile-navbar ${navOpen ? "open-nav" : ""}`}>
        <div onClick={toggleNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faTimes} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={toggleNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={toggleNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={toggleNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={toggleNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={toggleNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <Link onClick={toggleNav} to="/verification">
              Verification
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
