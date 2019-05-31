import React from "react";
import Card from "../components/Card";
import ListCards from "./ListCards";
import earth from "./../images/earth.svg";
import other from "./../images/other1.svg";
import iphone from "./../images/iphone.svg";
import wifi from "./../images/wifi.svg";
import charity from "./../images/charity.svg";

export default class Payments extends React.Component {
  state = {
    selectedCategory: "gosuslugi",
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
    let fineIcon = (
      <svg class="service-icon" width="50" height="50" viewBox="0 0 32 32">
        <path
          class="payment-menu-nav-item-icon-path-61"
          fill-rule="nonzero"
          d="M26.987 19.36C26.707 23.35 21.807 27 16 27c-5.785 0-10.669-3.621-10.984-7.593C2.42 16.55 2 15.208 2 11a1 1 0 0 1 1-1c3.168 0 5.336-.84 6.734-2.213.473-.465.822-.96 1.064-1.45.139-.279.208-.48.228-.566A1 1 0 0 1 12 5h8a1 1 0 0 1 .974.771c.02.086.09.287.228.566.242.49.59.985 1.064 1.45C23.664 9.16 25.832 10 29 10a1 1 0 0 1 1 1c0 4.188-.42 5.54-3.013 8.36zM7.155 20c.782 2.566 4.442 5 8.845 5 4.403 0 8.063-2.434 8.845-5H7.155zm20.837-8.027c-3.165-.173-5.513-1.173-7.128-2.76-.78-.766-1.282-1.543-1.575-2.213H12.71c-.293.67-.795 1.447-1.575 2.213C9.52 10.8 7.173 11.8 4.008 11.973c.057 2.91.452 3.847 2.432 6.027H25.52c2.013-2.182 2.413-3.115 2.47-6.027zM16 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    );
    // let utilitiesIcon = (
    //   <svg class="service-icon" width="50" height="50" viewBox="0 0 32 32">
    //     <path
    //       class="payment-menu-nav-item-icon-path-61"
    //       fill-rule="nonzero"
    //       d="M7.04 8.28A1 1 0 0 1 7 8V4a1 1 0 1 1 2 0v2.854l4.06-2.952a5 5 0 0 1 5.88 0l7 5.091A5 5 0 0 1 28 13.037V22a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-8.963a5 5 0 0 1 2.06-4.044l.98-.713zM23 25a3 3 0 0 0 3-3v-8.963a3 3 0 0 0-1.235-2.426l-7-5.091a3 3 0 0 0-3.53 0l-7 5.09A3 3 0 0 0 6 13.038V22a3 3 0 0 0 3 3h14z"
    //     />
    //   </svg>
    // );
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
        src="https://static.qiwi.com/img/providers/v2/categories/games.svg"
        alt=""
      />
    );
    let bankingIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src="https://static.qiwi.com/img/providers/v2/categories/bank.svg"
        alt=""
      />
    );
    let walletIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src="https://static.qiwi.com/img/providers/v2/categories/wallet.svg"
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
        src="https://static.qiwi.com/img/providers/v2/categories/transport.svg"
      />
    );
    let homePhoneIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src="https://static.qiwi.com/img/providers/v2/categories/telephony.svg"
      />
    );
    let homeIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src="https://static.qiwi.com/img/providers/v2/categories/house.svg"
      />
    );

    let socialIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src="https://static.qiwi.com/img/providers/v2/categories/social.svg"
      />
    );
    let bettingIcon = (
      <img
        class="service-icon"
        width="60"
        height="60"
        viewBox="0 0 32 32"
        src="https://static.qiwi.com/img/providers/v2/categories/fun.svg"
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
      { name: "social", title: "социальные сети", icon: socialIcon },
      { name: "banking", title: "Банковские услуги", icon: bankingIcon },
      { name: "jkh", title: "Услуги ЖКХ", icon: homeIcon },
      { name: "betting", title: "Букмекерские компании", icon: bettingIcon },
      { name: "transport", title: "Транспорт", icon: transportIcon },
      { name: "charity", title: "Благотворительность", icon: charityIcon },
      { name: "other", title: "Другие услуги", icon: otherIcon }
    ];

    return (
      <div style={{ padding: "5em 7%", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ margin: "1em" }}>Платежи и переводы</h2>
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
        <h2 style={{ margin: "1em" }}>Список услуг </h2>
        <ListCards selectedCategory={this.state.selectedCategory} />
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
