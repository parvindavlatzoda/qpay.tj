import React from "react";
import "./InfoCard.css";

export default class InfoCard extends React.Component {
  render() {
    const cardStyle = {
      // backgroundColor: "lightpink"
      padding: "0.01em"
    };

    return (
      <article className="info-card" style={cardStyle}>
        {/* {this.props.image} */}
        <img src={this.props.image} width="100%" alt="logo" />
        <h3>{this.props.category}</h3>
        <h4>{this.props.title}</h4>
        <p className="info-text">{this.props.information}</p>
      </article>
    );
  }
}
