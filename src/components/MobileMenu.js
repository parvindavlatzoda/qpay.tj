import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

export default class MobileMenu extends React.Component {
  state = {
    openMenu: false
  };

  СhangeMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
    console.log("change state");
    // this.setState(state => ({ openMenu: !state.openMenu }));
    // this.setState(({ menuOpen }) => ({ !menuOpen }));
    // console.log({ openMenu });
    // this.state();
  };
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
            {/* <li>
              <a href="#">Home</a>
            </li> */}
            <li>
              <Link
                // onClick={this.CloseMenu}
                to={"/payments"}
              >
                Платежи и переводы
              </Link>
            </li>
            {/* <li>
              <Link to={"/advertising"}>Реклама</Link>
            </li> */}
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
