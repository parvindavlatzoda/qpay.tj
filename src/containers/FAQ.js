import React from "react";

import Accordion from "./Accordion";

export default class Faq extends React.Component {
  render() {
    return (
      <div>
        <div class="header-back" />
        <div class="main-div">
          <h2>Вопросы и ответы</h2>
          <div class="container-faq">
            <div>
              <Accordion>
                <div label="Как пополнить свой счет?">
                  <p>Вы можете позвонить в колцентр</p>
                </div>
                <div label="Могу ли я вернуть свои деньги, если я ошибся номером?">
                  <p>
                    <strong>Common Name:</strong> Chinese Alligator
                  </p>
                </div>
                <div label="Я пополнил свой баланс, но деньги не прошли. Что делать?">
                  <p>Оставьте заявку в колцентре</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <p>
//                   <strong>Common Name:</strong> American Alligator
//                 </p>
//                 <p>
//                   <strong>Distribution:</strong> Texas to North Carolina, US
//                 </p>
//                 <p>
//                   <strong>Endangered Status:</strong> Currently Not Endangered
//                 </p>
