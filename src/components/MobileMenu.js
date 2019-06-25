import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

export default class MobileMenu extends React.Component {
  render() {
    return (
      <div className="burger-menu">
        <input type="checkbox" id="overlay-input" />
        <label for="overlay-input" id="overlay-button">
          <span />
        </label>
        <div id="overlay">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to={"/payments"}>Платежи и переводы</Link>
            </li>
            <li>
              <Link to={"/advertising"}>Реклама</Link>
            </li>
            <li>
              <Link to={"/advertising"}>Благотворительность</Link>
            </li>
            <li>
              <Link to={"/Faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
