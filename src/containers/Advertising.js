import React from "react";
import ads from "./../images/ads.jpg";

export default class Advertising extends React.Component {
  render() {
    return (
      <div>
        <div class="header-back" />
        <div class="main-div">
          <h2>Реклама</h2>
          <div
            style={{
              backgroundColor: "white",
              width: "73.33333333333333%",
              // margin: "10px .833333333333333%",
              // margin: "1em",
              padding: "1em"
            }}
          >
            {/* <p style={{ fontSize: "4em" }}>Нужна реклама? Горячая линия 5505</p> */}
            <img
              src={ads}
              style={{
                // width: "50em",
                // marginTop: "0.13em",
                position: "relative",
                margin: "0 0 65px",
                width: "100%"
                // height: "250px"
              }}
            />
            <h1>hello</h1>
          </div>
        </div>
      </div>
    );
  }
}
