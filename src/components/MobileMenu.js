import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css"

export default class MobileMenu extends React.Component {
    state={
       overlayState:{ display: "block" }
    }
    hideMenu(e) {
        e.preventDefault();
        console.log('The link was clicked.');
       
        this.setState({display : "none"})
    //    console.log(display);
    }
  render() {
    return (
      <div>
          <input type="checkbox" id="overlay-input" />
          <label for="overlay-input" id="overlay-button"><span></span></label>
          <div id="overlay" style={this.state.overlayState}>
            <ul onClick={this.hideMenu}>
              <li><a href="#">Home</a></li>
              <li>
                 <Link  to={"/payments"}>Платежи и переводы</Link>
               </li>
              <li><a href="/advertising">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
           </div>
      </div>
    );
  }
}
