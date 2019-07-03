import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

export default class MobileMenu extends React.Component {
  state = {
    openMenu: false
  };

  ChangeMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
    console.log("change state");
    // this.setState(state => ({ openMenu: !state.openMenu }));
    // this.setState(({ menuOpen }) => ({ !menuOpen }));
    // console.log({ openMenu });
    // this.state();
  };
  CloseMenu() {
    this.setState({ openMenu: false });
  }

  render() {
    return (
      <div className="burger-menu">
        <input
          onChange={this.ChangeMenu}
          checked={this.state.openMenu}
          type="checkbox"
          id="overlay-input"
        />
        <label for="overlay-input" id="overlay-button">
          <span />
        </label>
        <div id="overlay">
          <ul>
            <li>
              <Link onClick={this.CloseMenu} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={this.CloseMenu} to={"/payments"}>
                Платежи и переводы
              </Link>
            </li>
            {/* <li>
              <Link to={"/advertising"}>Реклама</Link>
            </li> */}
            <li>
              <Link onClick={this.CloseMenu} to={"/charity"}>
                Благотворительность
              </Link>
            </li>
            <li>
              <Link onClick={this.CloseMenu} to={"/Faq"}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
