import React from "react";
import "./InfoCard.css";

export default class InfoCard extends React.Component {
  render() {
    return (
      <article className="info-card">
        {/* {this.props.image} */}
        <img src={this.props.image} width="100%" alt="logo" />
        <h3>{this.props.title}</h3>
        {/* <p class="example"> {this.props.example}</p> */}
        <p className="info-text">{this.props.information}</p>
      </article>
    );
  }
}
