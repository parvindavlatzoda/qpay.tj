import React from "react";
import InfoCard from "../components/InfoCard";
import tcellLogo from "../images/tcell_logo.png";
import beelineLogo from "../images/beeline_logo.png";
import babilonMLogo from "../images/babilon-m_logo.png";
import babilonTLogo from "../images/babilon-t_logo.png";
import pamirEnergyLogo from "../images/pamir_energy_logo.png";
import alifMobiKoshelekLogo from "../images/alif_mobi_koshelek_logo.png";
import dilhoikushodaLogo from "../images/dilhoikushoda_logo.png";

export default class ListCards extends React.Component {
  render() {
    let infoBeeline =
      "компания beeline уже 10 лет занимается попороцией всякой ерунды, которая приносит прибыль не только  мне, но и моим друзьям.просто тут вякая еруна кому это надо. Я соглашаюсь с условием конфидициальности. Это право  каждого партизана быть придурком или уродом";
    let infoTcell =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nisl rhoncus mattis rhoncus urna neque viverra justo. Ut lectus arcu bibendum at varius. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Vulputate mi sit amet mauris commodo quis. Eget aliquet nibh praesent tristique. Sed libero enim sed faucibus turpis in. Fermentum iaculis eu non diam phasellus vestibulum. Habitant morbi tristique senectus et netus.";

    const infoCardList = [
      {
        category: "cellular",
        title: "Tcell",
        image: tcellLogo,
        information: infoTcell
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
        information: ""
      },
      {
        category: "internet",
        title: "Dilhoi kushoda",
        image: dilhoikushodaLogo,
        information: ""
      },
      {
        category: "internet",
        title: "BABILON-T",
        image: babilonTLogo,
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
