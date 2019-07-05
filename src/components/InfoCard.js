import React from "react";
import "./InfoCard.css";

export default class InfoCard extends React.Component {
  render() {
    return (
      <article className="info-card">
        {/* {this.props.image} */}
        <img src={this.props.image} width="100%" alt="logo" />
        <div>
          {/* <h3>{this.props.title}</h3> */}
          {/* <p class="card-title-1">Пример пополняемого аккаунта:</p> */}
          {/* <p class="example"> {this.props.example}</p> */}
          <p class="card-title-1">Провайдер:</p>
          <p class="card-provider"> {this.props.provider}</p>
          <p class="card-title-1">Адрес провайдера:</p>
          <p class="card-provider"> {this.props.adress}</p>
          {/* <p className="info-text">{this.props.information}</p> */}
        </div>
      </article>
    );
  }
}
