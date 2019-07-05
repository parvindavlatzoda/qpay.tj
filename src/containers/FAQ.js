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
                <div label="Сколько зачисляется платеж, совершенный через терминал?">
                  <p> Деньги через QPay терминал зачисляются моментально.</p>
                  <p>
                    Иногда по техническим причинам зачисление может занять до 3
                    рабочих дней.
                  </p>
                  <p>
                    Вы можете узнать статус своего платежа позвонив по
                    бесплатному номеру 5505
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    <span style={{ fontWeight: 700 }}>Важно:</span> Иногда
                    провайдеру требуется время, чтобы зачислить деньги на ваш
                    счет.{" "}
                  </p>
                </div>
                <div label="Как пополнить Киви кошелек и прочие зарубежные операторы?">
                  <p> В поле ввода появятся два значания.</p>
                  <p>В первом введите номер своего кошелька 992*****.</p>
                  <p>
                    Во втором поле введите номер своего мобильного телефона, для
                    получения смс с кодом потверждения.
                  </p>
                </div>
                <div label="Могу ли я вернуть свои деньги, если я ошибся номером?">
                  <p>
                    <strong>Оставьте заявку в колцентре</strong>
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
