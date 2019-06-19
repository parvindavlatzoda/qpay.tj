import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/qpay_logo.svg";
import "./NavMenu.css";

export default class NavMenu extends React.Component {
  render() {
    return (
      <nav>
        <Link to={"/"}>
          <img
            src={logo}
            classname="logo"
            alt="logo"
            style={{ width: "5em", marginTop: "0.13em" }}
          />
        </Link>
        <ul>
          <li>
            <Link to={"/payments"}>Платежи и переводы</Link>
          </li>
          <li>
            <Link to={"/advertising"}>Реклама</Link>
          </li>
          <li>
            <Link to={"/charity"}>Благотворительность</Link>
          </li>

          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
