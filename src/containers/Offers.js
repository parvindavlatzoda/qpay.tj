import React from "react";
import "./../styles/offers.css";
import offerTj from "./../images/offer_tj.pdf";

export default class Offers extends React.Component {
  render() {
    return (
      <div>
        <div class="header-back" />
        <div class="main-div">
          <h2>Оферты</h2>
          <div class="content-self-76">
            <div class="column-1">
              <div class="block-1">
                <div class="link-offer">
                  <a class="link-self-11" href="#">
                    Оферта для использования терминала
                  </a>
                </div>
                {/* 
                <div class="link-offer">
                  <a class="link-self-11" href={offerTj} target="_blank">
                    Оферта — «Условия использования API QPay Кошелька»
                  </a>
                </div> */}
              </div>
            </div>
            <div class="column-2">
              <div class="block-2">
                <p class="typo-self-180 typo-bold-198 typo-text-small-188">
                  Использование сервисов QPay осуществляется в соответствие с
                  офертами.
                </p>
                <p class="typo-self-180 typo-bold-198 typo-text-small-188">
                  Регистрируясь и используя наши сервисы по назначению, вы
                  подтверждаете своё согласие с условиями документов.
                </p>
                <p class="typo-self-180 typo-bold-198 typo-text-small-188">
                  Внимательно ознакомьтесь с офертами, и использование услуг
                  QPay будет для вас максимально простым и комфортным.
                </p>
              </div>
            </div>
          </div>
          {/* <section class="mainer-self-158">
          <div class="mainer-content-159">
            <div class="content-self-76">
              <div class="content-column-self-77 content-column-width-12-100">
                <h2>Оферты</h2>
              </div>
              <div class="content-column-self-77 content-column-width-8-92">
                <div class="block-self-165">
                  <div class="offers-page-self-0">
                    <div class="block-content-self-170 block-content-line-bottom-177">
                      <div class="block-content-content-172">
                        <div class="section-self-230">
                          <div class="section-size3-233">
                            <a class="link-self-11" href="#">
                              Оферта — «QPay Кошелек»
                            </a>
                          </div>
                          <div class="section-size3-233">
                            <a class="link-self-11" href="#">
                              Оферта — «Единая расчетная карта QPay»
                            </a>
                          </div>

                          <div class="section-size3-233">
                            <a
                              class="link-self-11"
                              href="//qiwi.com/page/file.action?id=300"
                            >
                              Оферта — «Виртуальная карта QPay»
                            </a>
                          </div>
                          <div class="section-size3-233">
                            <a class="link-self-11" href="#">
                              Оферта — «Карта QPay»
                            </a>
                          </div>

                          <div class="section-size3-233">
                            <a class="link-self-11" href="#">
                              Оферта — «Осуществление перевода денежных средств
                              по поручению физического лица без открытия
                              банковского счета»
                            </a>
                          </div>

                          <div class="section-size3-233">
                            <a class="link-self-11" href="#">
                              Оферта — «Трансграничные платежи»
                            </a>
                          </div>

                          <div class="section-size3-233">
                            <a class="link-self-11" href="#">
                              Оферта — «Условия использования API QPay Кошелька»
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="block-content-self-170">
                      <div class="block-content-content-172">
                        <div class="section-self-230">
                          <div class="section-size3-233">
                            <a
                              class="link-self-11"
                              href="//static.qiwi.com/ru/doc/oferta-lk-kzt.pdf"
                            >
                              Публичная оферта об использовании платежного
                              сервиса «QPay Кошелек»
                            </a>
                          </div>
                          <div class="section-size3-233">
                            <a class="link-self-11" href="#">
                              Публичная оферта об оказании услуг безналичных
                              платежей с использованием электронных денег
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-column-self-77 content-column-width-4-84">
                <div class="offers-info-self-179">
                  <div class="block-content-self-170">
                    <div class="block-content-content-172">
                      <p class="typo-self-180 typo-bold-198 typo-text-small-188">
                        Использование сервисов QPay осуществляется в
                        соответствие с офертами.
                      </p>
                      <p class="typo-self-180 typo-bold-198 typo-text-small-188">
                        Регистрируясь и используя наши сервисы по назначению, вы
                        подтверждаете своё согласие с условиями документов.
                      </p>
                      <p class="typo-self-180 typo-bold-198 typo-text-small-188">
                        Внимательно ознакомьтесь с офертами, и использование
                        услуг QPay будет для вас максимально простым и
                        комфортным.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        </div>
      </div>
    );
  }
}
