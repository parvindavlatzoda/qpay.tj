import React from "react";
import dobro from "./../images/dobro.jpg";

export default class Charity extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "5em",
          backgroundColor: "#f5f5f5"
        }}
      >
        <h1 style={{ fontSize: "3em" }}>
          Одним нажатием кнопки вы можете сделать пожертвование
        </h1>
        <div
          style={{
            backgroundColor: "white",
            width: "50em",
            margin: "1em",
            padding: "1em"
          }}
        >
          <img
            src={dobro}
            style={{ width: "48em", margin: "1em", borderRadius: "4px" }}
          />
          <div> ghfdfv</div>
        </div>
      </div>
    );
  }
}
