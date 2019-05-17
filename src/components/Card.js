import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    const cardStyle = {
      backgroundColor: "#ffffff"
      // padding: "1em"
    };

    return (
      <article className="card" style={cardStyle}>
        {this.props.icon}
        <h3 class="cards-title">{this.props.title}</h3>
      </article>
    );
  }
}
