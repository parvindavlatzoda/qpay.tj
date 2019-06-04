import React from "react";
import "./Charity.css";
import dobro from "./../images/dobro.jpg";
import dilhoikushoda from "./../images/dilhoikushoda_logo.png";
import dobrososedstvo from "./../images/dobrososedstvo.png";

export default class Charity extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "5em",
          backgroundColor: "#f5f5f5"
        }}
      >
        <h1 style={{ fontSize: "3em" }}>Благотворительность</h1>
        <div
          style={{
            backgroundColor: "white",
            width: "50em",
            margin: "1em",
            padding: "1em"
          }}
        >
          <img
            src={dobrososedstvo}
            style={{ width: "48em", margin: "1em", borderRadius: "4px" }}
          />
        </div>
      </div>
    );
  }
}
