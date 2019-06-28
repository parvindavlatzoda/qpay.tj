import React from "react";
import "./Charity.css";
import dobro from "./../images/dobro.jpg";
import dilhoikushoda from "./../images/dilhoikushoda_logo.png";
import dobrososedstvo from "./../images/dobrososedstvo.png";
import fondrushdi from "./../images/fondrushdi.png";

import hands from "./../images/hands.svg";

export default class Charity extends React.Component {
  render() {
    return (
      <div>
        <div class="header-back" />

        <div
        // class="main-div"
        // style={{ backgroundColor: "#fff" }}
        >
          {/* <h2>Благотворительность</h2> */}
          <img src={hands} />
          {/* <div
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
          </div> */}
        </div>
        <div
          style={{
            margin: " 2em 0",
            backgroundColor: "white"
          }}
        >
          <h1
            style={{
              fontSize: "3em",
              padding: "2em",
              textAlign: "center",
              fontWeight: "700",
              fontFamily: "Museo"
            }}
          >
            Наши партнеры
          </h1>
          <img
            src={dobrososedstvo}
            style={{
              margin: "1em",
              borderRadius: "4px",
              backgroundColor: "white"
            }}
          />
          <img
            src={dilhoikushoda}
            style={{
              margin: "1em",
              borderRadius: "4px"
              // backgroundColor: "white"
            }}
          />
          <img
            src={fondrushdi}
            style={{
              margin: "1em",
              borderRadius: "4px",
              backgroundColor: "white"
            }}
          />
        </div>
      </div>
    );
  }
}
