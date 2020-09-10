import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import "../../style/header/header";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
          <nav>
            <ul>
              <Link to="/about">
                <li>O firmie</li>
              </Link>
              <Link to="/offer">
                <li>Oferta</li>
              </Link>
              <Link to="/realisations">
                <li>Realizacje</li>
              </Link>
              <Link to="/contact">
                <li>Kontakt</li>
              </Link>
            </ul>
          </nav>
        </header>
        <div className="under-header" />
      </div>
    );
  }
}

export default Header;
