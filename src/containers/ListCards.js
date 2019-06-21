import React from "react";
import InfoCard from "../components/InfoCard";
import tcellLogo from "../images/tcell_logo.png";
import beelineLogo from "../images/beeline_logo.png";
import babilonMLogo from "../images/babilon-m_logo.png";
import babilonTLogo from "../images/babilon-t_logo.png";
import pamirEnergyLogo from "../images/pamir_energy_logo.png";
import alifMobiKoshelekLogo from "../images/alif_mobi_koshelek_logo.png";
import dilhoikushodaLogo from "../images/dilhoikushoda_logo.png";
import onexBet from "./../images/1xBet.png";
import alifCreditLogo from "./../images/alif_credit.png";
import alifDepositLogo from "./../images/alif_deposit.png";
import barqiTojikLogo from "./../images/barqi_tojik.png";
import bda30Logo from "./../images/bda_30.png";
import bda60Logo from "./../images/bda_60.png";
import bda100Logo from "./../images/bda_100.png";
import dobrososedstvoLogo from "./../images/dobrososedstvo.png";
import easteraLogo from "./../images/eastera.png";
import tojbetLogo from "./../images/tojbet.png";
import viberLogo from "./../images/viber.png";
import megafonLogo from "./../images/megafon.png";
import tojikMobileLogo from "./../images/tojik_mobile.png";
import ttlLogo from "./../images/ttl.png";
import intercomLogo from "./../images/intercom.png";
import qiwiLogo from "./../images/qiwi_wallet_logo.png";
import wmrLogo from "./../images/wmr.png";
import wmzLogo from "./../images/wmz.png";
import yandexMoneyLogo from "./../images/yandex_money.png";
import monetaruLogo from "./../images/monetaru.png";
import fondrushdiLogo from "./../images/fondrushdi.png";

export default class ListCards extends React.Component {
  render() {
    let infoBeeline =
      "компания beeline уже 10 лет занимается попороцией всякой ерунды, которая приносит прибыль не только  мне, но и моим друзьям.просто тут вякая еруна кому это надо. Я соглашаюсь с условием конфидициальности. Это право  каждого партизана быть придурком или уродом";
    let infoTcell =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nisl rhoncus mattis rhoncus urna neque viverra justo. Ut lectus arcu bibendum at varius. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Vulputate mi sit amet mauris commodo quis. Eget aliquet nibh praesent tristique. Sed libero enim sed faucibus turpis in. Fermentum iaculis eu non diam phasellus vestibulum. Habitant morbi tristique senectus et netus.";
    let infoBabilonM =
      "98x-xx-xx-xx 918-xx-xx-xx Минимальная сумма платежа: 0.25 с. Провайдер: ЗАО Международный банк Таджикистана, ИНН: 020043405, адресс провайдера: Таджикистан, 734002, г. Душанбе, р-н И. Сомони, ул. М. Курбонова 24";
    let infoBabilonMExample = ["98x-xx-xx-xx", "918-xx-xx-xx", "94x-xx-xx-xx"];
    const infoCardList = [
      {
        category: "cellular",
        title: "Tcell",
        image: tcellLogo,
        information: infoTcell
      },
      {
        category: "cellular",
        title: "МегаФон",
        image: megafonLogo,
        information: ""
      },
      {
        category: "cellular",
        title: "Beeline",
        image: beelineLogo,
        information: infoBeeline
      },
      {
        category: "cellular",
        title: "BABILON-M",
        image: babilonMLogo,
        example: infoBabilonMExample,
        information: infoBabilonM
      },
      {
        category: "cellular",
        title: "Точик Мобайл",
        image: tojikMobileLogo,
        information: ""
      },
      {
        category: "social",
        title: "viber",
        image: viberLogo,
        information: ""
      },
      {
        category: "charity",
        title: "Дилхои кушода",
        image: dilhoikushodaLogo,
        information: ""
      },
      {
        category: "charity",
        title: "Фонди Рушди Точикистон",
        image: fondrushdiLogo,
        information: ""
      },
      {
        category: "betting",
        title: "Рахш",
        image: tojbetLogo,
        information: ""
      },
      {
        category: "betting",
        title: "1XBET",
        image: onexBet,
        information: ""
      },
      {
        category: "internet",
        title: "BABILON-T",
        image: babilonTLogo,
        information: ""
      },
      {
        category: "telephoniya",
        title: "BABILON-T NGN",
        image: babilonTLogo,
        information: ""
      },
      {
        category: "telephoniya",
        title: "TTL",
        image: ttlLogo,
        information: ""
      },
      {
        category: "telephoniya",
        title: "INTERCOM",
        image: intercomLogo,
        information: ""
      },
      {
        category: "telephoniya",
        title: "EASTERA",
        image: easteraLogo,
        information: ""
      },
      {
        category: "telephoniya",
        title: "Точик Мобайл",
        image: tojikMobileLogo,
        information: ""
      },
      {
        category: "internet",
        title: "EASTERA",
        image: easteraLogo,
        information: ""
      },
      {
        category: "jkh",
        title: "PAMIR ENERGY",
        image: pamirEnergyLogo,
        information: ""
      },
      {
        category: "banking",
        title: "Алиф Погашение кредита",
        image: alifCreditLogo,
        information: ""
      },
      {
        category: "banking",
        title: "Алиф Пополнение депозита",
        image: alifDepositLogo,
        information: ""
      },
      {
        category: "wallets",
        title: "Алиф mobi",
        image: alifMobiKoshelekLogo,
        information: ""
      },
      {
        category: "wallets",
        title: "moneta ru",
        image: monetaruLogo,
        information: ""
      },
      {
        category: "wallets",
        title: "QIWI кошелек",
        image: qiwiLogo,
        information: ""
      },
      {
        category: "wallets",
        title: "WebMoney R",
        image: wmrLogo,
        information: ""
      },
      {
        category: "wallets",
        title: "WebMoney Z",
        image: wmzLogo,
        information: ""
      },
      {
        category: "wallets",
        title: "Яндекс Деньги",
        image: yandexMoneyLogo,
        information: ""
      },
      {
        category: "jkh",
        title: "Барки Точик",
        image: barqiTojikLogo,
        information: ""
      },
      {
        category: "transport",
        title: "БДА обуна 30 руза",
        image: bda30Logo,
        information: ""
      },
      {
        category: "transport",
        title: "БДА обуна 60 руза",
        image: bda60Logo,
        information: ""
      },
      {
        category: "transport",
        title: "БДА обуна 100 руза",
        image: bda100Logo,
        information: ""
      },
      {
        category: "charity",
        title: "Добрососедство",
        image: dobrososedstvoLogo,
        information: ""
      }
    ];

    return (
      <div>
        <div className="info-cards">
          {infoCardList
            .filter(
              infoCard => infoCard.category === this.props.selectedCategory
            )
            .map(infoCard => (
              <InfoCard
                category={infoCard.category}
                image={infoCard.image}
                title={infoCard.title}
                // example={infoCard.example}
                information={infoCard.information}
                // onSelect={this.onSelect}
              />
            ))}
        </div>
      </div>
    );
  }
}

// infoCardList.filter(card => card.category === this.props.selectedCategory).map(card => <Card .. />)
// primer vizova bez map
//  <InfoCard
//     category="cellular"
//     title="Tcell"
//     image={tcellLogo}
//     information={infoTcell}
//   />
//   <InfoCard
//     category="cellular"
//     title="Beeline"
//     image={beelineLogo}
//     information={infoBeeline}
//   />
//   <InfoCard
//     category="cellular"
//     title="BABILON-M"
//     image={babilonMLogo}
//   />

//   <InfoCard
//     category="internet"
//     title="Dilhoi kushoda"
//     image={dilhoikushodaLogo}
//   />
//   <InfoCard
//     category="internet"
//     title="BABILON-T"
//     image={babilonTLogo}
//   />

//   <InfoCard
//     category="internet"
//     title="Alif Mobi Koshelek"
//     image={alifMobiKoshelekLogo}
//   />
//   <InfoCard title="PAMIR ENERGY" image={pamirEnergyLogo} />
