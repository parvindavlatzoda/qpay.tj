import React from "react";
import "./Charity.css";
import dobro from "./../images/dobro.jpg";
import dilhoikushoda from "./../images/dilhoikushoda_logo.png";
import dobrososedstvo from "./../images/dobrososedstvo.png";
import fondrushdi from "./../images/fondrushdi.png";

import hands from "./../images/hands.jpg";

export default class Charity extends React.Component {
  render() {
    return (
      <div>
        <div class="header-back" />

        <div
        // class="main-div"
        >
          <div class="background-hands" style={{ margin: "1em" }}>
            <div class="cover">
              <h1 class="header-charity">
                Люди готовы собирать <span class="nadobro">#надобро</span>
              </h1>
              <h1 class="title-2">
                Просто напомните клиентам, что помогать - легко
              </h1>
            </div>
          </div>
          <div>
            <h1 class="header-charity">Мы помогаем делать мир добрее</h1>
            <div class="title-3">
              <span class="title-2">
                Наша компания предоставляет два самых важных рекламных места на
                своих терминалах совершенно бесплатно благотворительным
                организациям-партнерам.
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: " 2em 0",
            backgroundColor: "white"
          }}
        >
          <h1
            class="header-charity"
            // style={{
            //   fontSize: "3em",
            //   padding: "2em",
            //   textAlign: "center",
            //   fontWeight: "700"
            // }}
          >
            Наши партнеры
          </h1>
          <div class="partner-grid">
            <img class="partner" src={dobrososedstvo} />
            <img class="partner" src={dilhoikushoda} />
            <img class="partner" src={fondrushdi} />
          </div>
        </div>
      </div>
    );
  }
}
