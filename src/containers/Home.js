import React from "react";
import "./Home.css";
import socl from "./../images/socl.svg";
import visamaster from "./../images/visamaster.svg";
import banking from "./../images/banking.svg";
import ewallets from "./../images/ewallets.svg";
import terminals from "./../images/terminals.svg";

const images = [ewallets, terminals, socl, visamaster, banking];
// const image = images[Math.floor(Math.random() * images.length)];
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={images[Math.floor(Math.random() * images.length)]} />

        {/* <img src={ewallets} />
        <img src={terminals} />
        <img src={socl} />
        <img src={visamaster} />
        <img src={banking} /> */}
      </div>
    );
  }
}

//<div class="landing-content-self-322">
//   <div
//     style={{
//       backgroundColor: "#fff",
//       width: "73.33333333333333%",
//       margin: "10px .833333333333333%",
//       // margin: "1em",
//       padding: "1em",
//       boxShadow: "0 1px 2px 0 rgba(0,0,0,0.14)",
//       borderRadius: "10px"
//     }}
//   >
//     {/* <p style={{ fontSize: "4em" }}>Нужна реклама? Горячая линия 5505</p> */}
//     <img
//       src={terminal}
//       style={{
//         // width: "50em",
//         // marginTop: "0.13em",
//         position: "relative",
//         margin: "0 0 65px",
//         width: "50%"
//         // height: "250px"
//       }}
//     />
//     <h1>hello</h1>
//   </div>
//   <div />

// </div></div>

//// prosto variant 2 /////

// <section class="promo-self-310">
//           <div class="promo-content-311 promo-content-vertical-312">
//             <div class="promo-img-block-313 promo-img-block-vertical-314">
//               <img class="promo-img-315" src={glavnaya} />
//             </div>
//             <div class="promo-text-block-317 promo-text-block-vertical-318">
//               <h1 class="promo-title-319">
//                 Оплачивать услуги стало проще, чем завязать шнурки
//               </h1>
//               <span class="promo-tagline-320">Нужен только номер телефона</span>
//               <div class="promo-button-wrap-321">
//                 {/* <button
//                 class="button-self-30 button-landing-37"
//                 tabindex="0"
//                 type="submit"
//               >
//                 <span class="button-content-43">
//                   <span class="button-content-icon-44">
//                     <img src="https://static.qiwi.com/img/qiwi_com/landing/promo/btn-qiwi-logo.svg" />
//                   </span>
//                   <span class="button-content-text-45">Создать кошелек</span>
//                 </span>
//               </button> */}
//               </div>
//             </div>
//           </div>
//         </section>

// {/* <section class="landing-content-self-322">
// <div class="landing-content-inner-323">
//   <div class="banner-self-324">
//     <div class="block-self-333">
//       <div class="banner-inner-325">
//         <div class="banner-img-wrap-328">
//           <img
//             class="banner-img-327"
//             src="https://static.qiwi.com/img/qiwi_com/landing/banner/credit.png"
//           />
//         </div>
//         <div class="banner-content-326">
//           <div class="banner-text-wrap-329">
//             <h2 class="banner-title-330">
//               Вам не до шуток:
//               <br />
//               нужно срочно погасить кредит?
//             </h2>
//             <span class="banner-text-331">
//               Оплатите его в наших терминалах, без очереди.
//             </span>
//           </div>
//           <div class="banner-link-wrap-332">
//             <button
//               class="button-self-30 button-normal-32 button-simple-36"
//               tabindex="0"
//               type="submit"
//             >
//               <span class="button-content-43">
//                 <span class="button-content-text-45">
//                   Погасить кредит
//                 </span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="info-self-334">
//     <div class="info-item-self-335">
//       <div class="info-item-inner-336">
//         <div class="info-item-img-block-338">
//           <img
//             class="info-item-img-340"
//             src="https://static.qiwi.com/img/qiwi_com/landing/info-blocks/brands.png"
//           />
//         </div>
//         <div class="info-item-content-341">
//           <div class="info-item-text-block-343">
//             <h3 class="info-item-title-344">Кэшбэк от QIWI Бонус</h3>
//             <span class="info-item-tagline-345">
//               До 8% от покупок на AliExpress, до 6,4% от покупок на
//               ASOS и до 25% в других магазинах.
//             </span>
//           </div>
//           <div class="info-item-action-block-346">
//             <button
//               class="button-self-30 button-normal-32 button-simple-36"
//               tabindex="0"
//               type="submit"
//             >
//               <span class="button-content-43">
//                 <span class="button-content-text-45">
//                   Покупать с кэшбэком
//                 </span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="info-item-self-335">
//       <div class="info-item-inner-336">
//         <div class="info-item-img-block-338">
//           <img
//             class="info-item-img-340"
//             src="https://static.qiwi.com/img/qiwi_com/landing/info-blocks/card.png"
//           />
//         </div>
//         <div class="info-item-content-341">
//           <div class="info-item-text-block-343">
//             <h3 class="info-item-title-344">Банковская карта QIWI</h3>
//             <span class="info-item-tagline-345">
//               Бесплатное обслуживание. 100000 точек пополнения. Единый
//               баланс с кошельком.
//             </span>
//           </div>
//           <div class="info-item-action-block-346">
//             <button
//               class="button-self-30 button-normal-32 button-simple-36"
//               tabindex="0"
//               type="submit"
//             >
//               <span class="button-content-43">
//                 <span class="button-content-text-45">
//                   Получить карту
//                 </span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </section> */}
