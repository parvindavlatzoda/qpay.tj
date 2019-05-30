import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    const cardStyle = {
      backgroundColor: "#ffffff"
    };

    return (
      <article
        className="card"
        id={this.props.name}
        style={cardStyle}
        onClick={this.props.onSelect}
      >
        {this.props.icon}
        <h3 class="cards-title">{this.props.title}</h3>
      </article>
    );
  }
}
