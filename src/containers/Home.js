import React from "react";
import Card from "../components/Card";
// import Payments from "./Payments";
import "./Home.css";
import ListCards from "./ListCards";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-grid">
        <Card />

        <ListCards />

        {/* <aside>
          <Payments />
        </aside> */}
      </div>
    );
  }
}
