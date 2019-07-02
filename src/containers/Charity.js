import React from "react";
import "./Charity.css";
import dobro from "./../images/dobro.jpg";
import dilhoikushoda from "./../images/dilhoikushoda_logo.png";
import dobrososedstvo from "./../images/dobrososedstvo.png";
import fondrushdi from "./../images/fondrushdi.png";

// import hands from "./../images/hands.jpg";

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
              <div style={{ margin: "100px", textAlign: "center" }}>
                <svg
                  class="t-cover__arrow-svg"
                  // style="fill:#000000;"
                  x="0px"
                  y="0px"
                  width="38.417px"
                  height="18.592px"
                  viewBox="0 0 38.417 18.592"
                >
                  <g>
                    <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z" />
                  </g>
                </svg>
              </div>
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
