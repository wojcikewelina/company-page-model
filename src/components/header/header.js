import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <header>
        <nav>
          <ul>
            <Link to="/about">
              <li>O firmie</li>
            </Link>
            <Link to="/offer">
              <li>Oferta</li>
            </Link>
                       <Link to="/contact">
              <li>Kontakt</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
