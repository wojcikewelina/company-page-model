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
            <p>About us</p>
            <li>Regulamin</li>
            <li>Polityka prywatności</li>
            <li>Kontakt</li>
          </ul>
        </div>
        <div className="info-element">
          <ul>
            <p>Zobacz wiecej</p>
            <li>
              <a href="https://www.facebook.com"><img src="https://www.flaticon.com/svg/static/icons/svg/747/747374.svg"/>Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com"><img src="https://www.flaticon.com/svg/static/icons/svg/1225/1225842.svg"/>Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com"><img src="https://www.flaticon.com/svg/static/icons/svg/1077/1077042.svg"/>Instagram</a>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
}


