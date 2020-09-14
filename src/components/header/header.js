import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import "../../style/header/header";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <NavLink exact to="/">
            <Logo />
          </NavLink>
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  exact
                  to="/"
                >
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  exact
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  exact
                  to="/realisations"
                >
                  Realizacje{" "}
                </NavLink>
              </li>
            </ul>
          </nav>

          <NavLink
            className="main-nav"
            activeClassName="main-nav-active"
            exact
            to="/contact"
          >
            <button className="nav-contact-button">Contact</button>
          </NavLink>
        </header>
        <div className="under-header" />
      </div>
    );
  }
}

export default Header;
