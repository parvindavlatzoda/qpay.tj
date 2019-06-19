import React from "react";
import Card from "../components/Card";
import ListCards from "./ListCards";
import earth from "./../images/earth.svg";
import other from "./../images/other1.svg";
import iphone from "./../images/iphone.svg";
import wifi from "./../images/wifi.svg";
import charity from "./../images/charity.svg";
import telephony from "./../images/telephony.svg";
import wallet from "./../images/wallet.svg";
import games from "./../images/games.svg";
import social from "./../images/social.svg";
import bank from "./../images/bank.svg";
import house from "./../images/house.svg";
import fun from "./../images/fun.svg";
import transport from "./../images/transport.svg";

export default class Payments extends React.Component {
  state = {
    selectedCategory: "cellular",
    title: ""
  };

  onSelect = event => {
    const name = event.currentTarget.id;
    this.setState({ selectedCategory: name });
  };
  render() {
    let mobilIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={iphone}
      />
    );

    let internetIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={wifi}
        alt=""
      />
    );
    let gamesIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={games}
        alt=""
      />
    );
    let bankingIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={bank}
        alt=""
      />
    );
    let walletIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={wallet}
        alt=""
      />
    );
    let otherIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={other}
        alt=""
      />
    );
    let transportIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={transport}
      />
    );
    let homePhoneIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={telephony}
      />
    );
    let homeIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={house}
      />
    );

    let socialIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={social}
      />
    );
    let bettingIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={fun}
      />
    );
    let internationalIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={earth}
      />
    );
    let charityIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src={charity}
      />
    );

    const cardList = [
      { name: "cellular", title: "Сотовая связь", icon: mobilIcon },
      {
        name: "telephoniya",
        title: "Телефония",
        icon: homePhoneIcon
      },
      { name: "wallets", title: "Электронные кошельки", icon: walletIcon },
      { name: "internet", title: "Интернет", icon: internetIcon },
      { name: "games", title: "Игры и развлечения", icon: gamesIcon },
      {
        name: "internationalservices",
        title: "Международные операторы",
        icon: internationalIcon
      },
      { name: "social", title: "Cоциальные сети", icon: socialIcon },
      { name: "banking", title: "Банковские услуги", icon: bankingIcon },
      { name: "jkh", title: "Услуги ЖКХ", icon: homeIcon },
      { name: "betting", title: "Букмекерские компании", icon: bettingIcon },
      { name: "transport", title: "Транспорт", icon: transportIcon },
      { name: "charity", title: "Благотворительность", icon: charityIcon },
      { name: "other", title: "Другие услуги", icon: otherIcon }
    ];

    return (
      <div>
        <div class="header-back" />
        <div class="main-div">
          <h2>Платежи и переводы</h2>
          <div className="cards">
            {cardList.map(card => (
              <Card
                name={card.name}
                onSelect={this.onSelect}
                title={card.title}
                icon={card.icon}
              />
            ))}
          </div>
          {/* <span>{this.state.selectedCategory}</span> */}
          <h2>Список услуг </h2>
          <ListCards selectedCategory={this.state.selectedCategory} />
        </div>
      </div>
    );
  }
}

//           <Card
//             title="Сотовая связь"
//             icon={mobilIcon}
//             onClick={this.onSearch}
//           />
//            <Card title="Госуслуги и штрафы" icon={fineIcon} />
//           <Card title="Услуги ЖКХ" icon={utilitiesIcon} />
//           <Card title="Интернет и ТВ" icon={internetIcon} />
//           <Card title="Игры и развлечения" icon={gamesIcon} />
//           <Card title="Банковские услуги" icon={bankingIcon} />
//           <Card title="Сотовая связь" icon={mobilIcon} />
//           <Card title="International services" icon={fineIcon} />
//           <Card title="e-wallets" icon={utilitiesIcon} />
//           <Card title="Transport" icon={internetIcon} />
//           <Card title="betting" icon={gamesIcon} />
//           <Card title="social networks" icon={bankingIcon} />
// let utilitiesIcon = (
//   <svg class="service-icon" width="50" height="50" viewBox="0 0 32 32">
//     <path
//       class="payment-menu-nav-item-icon-path-61"
//       fill-rule="nonzero"
//       d="M7.04 8.28A1 1 0 0 1 7 8V4a1 1 0 1 1 2 0v2.854l4.06-2.952a5 5 0 0 1 5.88 0l7 5.091A5 5 0 0 1 28 13.037V22a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-8.963a5 5 0 0 1 2.06-4.044l.98-.713zM23 25a3 3 0 0 0 3-3v-8.963a3 3 0 0 0-1.235-2.426l-7-5.091a3 3 0 0 0-3.53 0l-7 5.09A3 3 0 0 0 6 13.038V22a3 3 0 0 0 3 3h14z"
//     />
//   </svg>
// );
