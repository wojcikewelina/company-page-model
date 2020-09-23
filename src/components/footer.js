import React from "react";

import "../style/footer.scss"
import Logo from "./header/logo"

export default function Footer() {
  return (
    <footer>
      <div id="logo-el" ><Logo/></div>
      <article id="content">
        <div className="info-element">
          <ul>
            About us
            <li>Regulamin</li>
            <li>Polityka prywatności</li>
            <li>Kontakt</li>
          </ul>
        </div>
        <div className="info-element">
          <ul>
            Zobacz wiecej
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
}
