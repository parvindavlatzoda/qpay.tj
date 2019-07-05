import React from "react";
import InfoCard from "../components/InfoCard";
import tcellLogo from "../images/tcell_logo.png";
import beelineLogo from "../images/beeline_logo.png";
import babilonMLogo from "../images/babilon-m_logo.png";
import babilonTLogo from "../images/babilon-t_logo.png";
import pamirEnergyLogo from "../images/pamir_energy_logo.png";
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
import tojnetLogo from "./../images/tojnet.png";
import ismtjLogo from "./../images/ismtj.png";
import somontjLogo from "./../images/somontj.png";
import skypeLogo from "./../images/skype.png";
import vkLogo from "./../images/vk.png";
import okLogo from "./../images/ok.png";
import instashoptjLogo from "./../images/instashoptj.png";
import elsomLogo from "./../images/elsom.png";
import tennisiLogo from "./../images/tennisi.png";
import humoPogashenieLogo from "./../images/humo_pogashenie.png";
import humoDepositLogo from "./../images/humo_deposit.png";
import humoKoshelekLogo from "./../images/humo_koshelek.png";
import alifMobiCardLogo from "./../images/alif_mobi_card.png";
import alifMobiKoshelekLogo from "./../images/alif_mobi_koshelek.png";
import fmfbLogo from "./../images/fmfb.png";
import kortimilliLogo from "./../images/korti_milli.png";
import kortiOsonLogo from "./../images/korti_oson.png";
import fincaLogo from "./../images/finca.png";
import visaMasterMirLogo from "./../images/visa_master_mir.png";
import reklamnayaGazetaLogo from "./../images/reklamnaia_gazeta.png";
import eruznomaLogo from "./../images/eruznoma.png";
import ntvPlusLogo from "./../images/ntv_plus.png";
import worldOfTanksLogo from "./../images/world_of_tanks.png";
import warThunderLogo from "./../images/warthunder.png";
import warFaceLogo from "./../images/warface.png";
import steamLogo from "./../images/steam.png";
import game101xpLogo from "./../images/101xp.png";
import archeageLogo from "./../images/archeage.png";
import worldOfWarplanesLogo from "./../images/world_of_warplanes.png";
import vodokanalLogo from "./../images/vodokanal.png";
import rfMtsLogo from "./../images/rf_mts.png";
import rfBeelineLogo from "./../images/rf_beeline.png";
import rfTele2Logo from "./../images/rf_tele2.png";
import yotaLogo from "./../images/rf_yota.png";
import rfMegafonLogo from "./../images/rf_megafon.png";
import rostelekomLogo from "./../images/rostelekom.png";

export default class ListCards extends React.Component {
  render() {
    let infoBeeline =
      "компания beeline уже 10 лет занимается попороцией всякой ерунды, которая приносит прибыль не только  мне, но и моим друзьям.просто тут вякая еруна кому это надо. Я соглашаюсь с условием конфидициальности. Это право  каждого партизана быть придурком или уродом";
    let infoTcell =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nisl rhoncus mattis rhoncus urna neque viverra justo. Ut lectus arcu bibendum at varius. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Vulputate mi sit amet mauris commodo quis. Eget aliquet nibh praesent tristique. Sed libero enim sed faucibus turpis in. Fermentum iaculis eu non diam phasellus vestibulum. Habitant morbi tristique senectus et netus.";
    let babilonMExample = "начинаются с 98, 918, 94";

    // let babilonMExample = "98x-xx-xx-xx 918-xx-xx-xx 94x-xx-xx-xx";
    // providers
    let internBankProvider =
      "ЗАО Международный банк Таджикистана, ИНН: 020043405";
    let internBankProviderAdress =
      "Таджикистан, 734002, г. Душанбе, р-н И. Сомони, ул. М. Курбонова 24";
    let tojikMobileProvider = "ООО Точикмобайл, ИНН: 02009380";
    let tojikMobileProviderAdress = "Таджикистан, Душанбе, пр. Рудаки 53";
    let fmfbProvider = "ЗАО ПМФБ, ИНН: 020015974, тел: 37 228-93-14";
    let fmfbProviderAdress = "Таджикистан, Душанбе, пр. Рудаки 105";
    let ttlProvider = "ЗАО ТелекомТехнолоджи, тел: 48 701-88-88";
    let ttlProviderAdress = "Таджикистан, Душанбе, ул. Бохтар 48/3";
    let intercomProvider = "ООО «Интерком», ИНН: 020002799, тел: 48 701-88-88";
    let intercomProviderAdress = "Таджикистан, Душанбе, пр. Рудаки 81-2";
    let ismtjProvider = "ООО Исм ТЧ, ИНН: 040032055";
    let ismtjProviderAdress = "Таджикистан, Душанбе, ул. Мухамадиева 52";
    let fondrushdiProvider = "Фонд Рушди Тоҷикистон, ИНН: 020043775, тел: 5505";
    let fondrushdiProviderAdress =
      "Таджикистан, г. Душанбе, р-н Шоҳмансур, ул. Айни, 48";
    let dobrososedstvoProvider =
      "НПО Международное Добрососедство, ИНН: 040012220";
    let dobrososedstvoProviderAdress = "Таджикистан, г. Душанбе, Мушфики, 47";
    let dilhoikushodaProvider =
      "Благотворительная организация Дилхои Кушода, ИНН: 010100171, тел: 5505";
    let dilhoikushodaProviderAdress =
      "Таджикистан, г. Душанбе, р-н Шоҳмансур, ул. Айни, 48";
    let pardokhttjProvider = "ООО Пардохт ТЧ, ИНН: 020038712";
    let pardokhttjProviderAdress =
      "Таджикистан, Душанбе, ул. М. Турсунзода 13/23";
    let irsolProvider = "ООО Ирсол, ИНН: 040051314, тел: 91 902-21-22";
    let irsolProviderAdress = "Таджикистан, г. Душанбе, ул. Н. Махсум 75";
    let humoProvider = "ЗАО МДО Хумо, ИНН: 020026755, тел: 44 640-55-44";
    let humoProviderAdress = "Таджикистан, Душанбе, ул. Н. Карабаева, 148/1";
    let alifProvider =
      "ООО МДО Алиф-Капитал, ИНН: 030026536, тел: 44 888-11-11";
    let alifProviderAdress = "Таджикистан, Душанбе, ул. Ф. Ниези, 51";
    let fincaProvider = "ООО МДО ФИНКА, ИНН: 010021096";
    let fincaProviderAdress = "Таджикистан, Душанбе, ул. Джаббор Расулова, 9";
    let vatanProvider = "ООО Ватан ИКТ, ИНН: 020044972";
    let vatanProviderAdress = "Таджикистан, Душанбе, ул. Н. Махсум 77/5А";

    // examples
    let megafonExample = "90x-xx-xx-xx 55x-xx-xx-xx 88x-xx-xx-xx 41x-xx-xx-xx";
    let beelineExample = "91x-xx-xx-xx";
    let tcellExample =
      "93x-xx-xx-xx 92x-xx-xx-xx 50x-xx-xx-xx 77x-xx-xx-xx 70x-xx-xx-xx 99x-xx-xx-xx";
    let tojikMobileExample = "37x-xx-xx-xx 31x-xx-xx-xx";
    let ttlExample = "48x-xx-xx-xx";
    let intercomExample = "42x-xx-xx-xx";
    let easteraExample = "43x-xx-xx-xx";
    let fiveExample = "xxxxx";
    let easteraInternet = "xxxxxxxxxxxxx";
    let somontjExample = "992-xxx-xxx-xxx";
    let viberExample = "992-xxx-xx-xx-xx 7-xxx-xxx-xx-xx";
    let qiwiExample =
      "7xxx-xxx–xx–xx 77xx xxx–xx–xx 992xxxxx–xx–xx 998xx xxx–xx–xx";
    let wmzExample = "Z xxxxxxxxxxxx";
    let wmrExample = "R xxxxxxxxxxxx";
    let nineExample = "xxxxxxxxx";
    let tenExample = "xxxxxxxxxx";
    let twelveExample = "xxxxxxxxxxxx";
    let fourteenExample = "xxxxxxxxxxxxxx";
    let fifteenExample = "xxxxxxxxxxxxxxx";
    let sixteenExample = "xxxxxxxxxxxxxxxx";

    let elsomExample = "070xxxxxx 077xxxxxx 055xxxxxxxx";
    let twentyfourExample = "xxxxxxxxxxxxxxxxxxxxxxxx";

    const infoCardList = [
      {
        category: "internationalservices",
        title: "Ростелеком",
        image: rostelekomLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "internationalservices",
        title: "Yota (Россия)",
        image: yotaLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "internationalservices",
        title: "Tele-2 (Россия)",
        image: rfTele2Logo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "internationalservices",
        title: "Мегафон (Россия)",
        image: rfMegafonLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "internationalservices",
        title: "Beeline (Россия)",
        image: rfBeelineLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "internationalservices",
        title: "МТС (Россия)",
        image: rfMtsLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "jkh",
        title: "Водоканал (Душанбе)",
        image: vodokanalLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "jkh",
        title: "PAMIR ENERGY",
        image: pamirEnergyLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "games",
        title: "World of Warplanes",
        image: worldOfWarplanesLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },

      {
        category: "games",
        title: "War Thunder",
        image: warThunderLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "games",
        title: "ArcheAge",
        image: archeageLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "games",
        title: "101XP",
        image: game101xpLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "games",
        title: "Steam",
        image: steamLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "games",
        title: "War Face",
        image: warFaceLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "games",
        title: "World of Tanks",
        image: worldOfTanksLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "other",
        title: "NTV +",
        image: ntvPlusLogo,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "other",
        title: "E-Ruznoma",
        image: eruznomaLogo,
        provider: vatanProvider,
        adress: vatanProviderAdress
      },
      {
        category: "other",
        title: "Рекламная газета",
        image: reklamnayaGazetaLogo
        // provider: fmfbProvider,
        // adress: fmfbProviderAdress
      },
      {
        category: "banking",
        title: "Visa / Mastercard / МИР (Карты РФ)",
        image: visaMasterMirLogo,
        example: sixteenExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "banking",
        title: "FINCA",
        image: fincaLogo,
        example: fourteenExample,
        provider: fincaProvider,
        adress: fincaProviderAdress
      },
      {
        category: "banking",
        title: "Корти Осон",
        image: kortiOsonLogo,
        example: sixteenExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "banking",
        title: "Корти милли",
        image: kortimilliLogo,
        example: sixteenExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "banking",
        title: "ПМФБ - Погашение кредита",
        image: fmfbLogo,
        example: fifteenExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "banking",
        title: "Алиф Самоя - Пополнение кошелька",
        image: alifMobiKoshelekLogo,
        example: nineExample,
        provider: alifProvider,
        adress: alifProviderAdress
      },
      {
        category: "banking",
        title: "Алиф Сармоя - Пополнение карты",
        image: alifMobiCardLogo,
        example: sixteenExample,
        provider: alifProvider,
        adress: alifProviderAdress
      },
      {
        category: "banking",
        title: "Алиф Сармоя - Погашение кредита",
        image: alifCreditLogo,
        example: fiveExample,
        provider: alifProvider,
        adress: alifProviderAdress
      },
      {
        category: "banking",
        title: "Алиф Пополнение депозита",
        image: alifDepositLogo,
        example: tenExample,
        provider: alifProvider,
        adress: alifProviderAdress
      },
      {
        category: "banking",
        title: "Хумо - Пополнение кошелка",
        image: humoKoshelekLogo,
        example: nineExample,
        provider: humoProvider,
        adress: humoProviderAdress
      },
      {
        category: "banking",
        title: "Хумо - Пополнение депозита",
        image: humoDepositLogo,
        example: tenExample,
        provider: humoProvider,
        adress: humoProviderAdress
      },
      {
        category: "banking",
        title: "Хумо - Погашение кредита",
        image: humoPogashenieLogo,
        example: tenExample,
        provider: humoProvider,
        adress: humoProviderAdress
      },

      {
        category: "cellular",
        title: "BABILON-M",
        image: babilonMLogo,
        example: babilonMExample,
        provider: internBankProvider,
        adress: internBankProviderAdress
      },
      {
        category: "cellular",
        title: "МегаФон",
        image: megafonLogo,
        example: megafonExample,
        provider: internBankProvider,
        adress: internBankProviderAdress
      },
      {
        category: "cellular",
        title: "Beeline",
        image: beelineLogo,
        example: beelineExample,
        provider: internBankProvider,
        adress: internBankProviderAdress
      },
      {
        category: "cellular",
        title: "Tcell",
        image: tcellLogo,
        example: tcellExample,
        provider: internBankProvider,
        adress: internBankProviderAdress
      },
      {
        category: "cellular",
        title: "Точик Мобайл",
        image: tojikMobileLogo,
        example: tojikMobileExample,
        provider: tojikMobileProvider,
        adress: tojikMobileProviderAdress
      },
      {
        category: "telephoniya",
        title: "BABILON-T NGN",
        image: babilonTLogo,
        example: nineExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "telephoniya",
        title: "Телеком Технолоджи",
        image: ttlLogo,
        example: ttlExample,
        provider: ttlProvider,
        adress: ttlProviderAdress
      },
      {
        category: "telephoniya",
        title: "INTERCOM",
        image: intercomLogo,
        example: intercomExample,
        provider: intercomProvider,
        adress: intercomProviderAdress
      },
      {
        category: "telephoniya",
        title: "EASTERA",
        image: easteraLogo,
        example: easteraExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      // {
      //   category: "telephoniya",
      //   title: "Точик Мобайл",
      //   image: tojikMobileLogo,
      //   information: ""
      // },
      {
        category: "internet",
        title: "Babilon-T Internet",
        image: babilonTLogo,
        example: fiveExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "internet",
        title: "Eastera Internet",
        image: easteraLogo,
        example: easteraInternet,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "internet",
        title: "TojNet",
        image: tojnetLogo,
        example: "xxxxx ",
        provider: "",
        adress: ""
      },
      {
        category: "internet",
        title: "Телеком Технолоджи Internet",
        image: ttlLogo,
        example: "xxxxxx",
        provider: ttlProvider,
        adress: ttlProviderAdress
      },
      {
        category: "other",
        title: "ISM.tj",
        image: ismtjLogo,
        example: "xxxxx ",
        provider: ismtjProvider,
        adress: ismtjProviderAdress
      },
      {
        category: "social",
        title: "Somon.tj",
        image: somontjLogo,
        example: somontjExample,
        provider: "",
        adress: ""
      },
      {
        category: "social",
        title: "Viber",
        image: viberLogo,
        example: viberExample,
        provider: pardokhttjProvider,
        adress: pardokhttjProviderAdress
      },
      {
        category: "social",
        title: "Skype",
        image: skypeLogo,
        example: twentyfourExample,
        provider: pardokhttjProvider,
        adress: pardokhttjProviderAdress
      },
      {
        category: "social",
        title: "ВКонтакте",
        image: vkLogo,
        example: twentyfourExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "social",
        title: "odnoklassniki.ru",
        image: okLogo,
        example: twentyfourExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "social",
        title: "Instashop",
        image: instashoptjLogo,
        example: nineExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "charity",
        title: "Фонди Рушди Точикистон",
        image: fondrushdiLogo,
        example: nineExample,
        provider: fondrushdiProvider,
        adress: fondrushdiProviderAdress
      },
      {
        category: "charity",
        title: "Добрососедство",
        image: dobrososedstvoLogo,
        example: nineExample,
        provider: dobrososedstvoProvider,
        adress: dobrososedstvoProviderAdress
      },
      {
        category: "charity",
        title: "Дилхои кушода",
        image: dilhoikushodaLogo,
        example: nineExample,
        provider: dilhoikushodaProvider,
        adress: dilhoikushodaProviderAdress
      },

      {
        category: "betting",
        title: "1XBET",
        image: onexBet,
        example: nineExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "betting",
        title: "Ирсол",
        image: tennisiLogo,
        example: nineExample,
        provider: irsolProvider,
        adress: irsolProviderAdress
      },

      {
        category: "wallets",
        title: "QIWI Кошелек",
        image: qiwiLogo,
        example: qiwiExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "wallets",
        title: "WebMoney Z",
        image: wmzLogo,
        example: wmzExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "wallets",
        title: "WebMoney R",
        image: wmrLogo,
        example: wmrExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },

      {
        category: "wallets",
        title: "Алиф Самоя - Пополнение кошелька",
        image: alifMobiKoshelekLogo,
        example: nineExample,
        provider: alifProvider,
        adress: alifProviderAdress
      },
      {
        category: "wallets",
        title: "Moneta.ru",
        image: monetaruLogo,
        example: "xxxxxxxx",
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "wallets",
        title: "Yandex Деньги",
        image: yandexMoneyLogo,
        example: twelveExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "wallets",
        title: "Элсом",
        image: elsomLogo,
        example: elsomExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "jkh",
        title: "Барки Точик",
        image: barqiTojikLogo,
        example: wmrExample,
        provider: fmfbProvider,
        adress: fmfbProviderAdress
      },
      {
        category: "transport",
        title: "БДА обуна 30 руза",
        image: bda30Logo,
        provider: pardokhttjProvider,
        adress: pardokhttjProviderAdress
      },
      {
        category: "transport",
        title: "БДА обуна 60 руза",
        image: bda60Logo,
        provider: pardokhttjProvider,
        adress: pardokhttjProviderAdress
      },
      {
        category: "transport",
        title: "БДА обуна 100 руза",
        image: bda100Logo,
        provider: pardokhttjProvider,
        adress: pardokhttjProviderAdress
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
                example={infoCard.example}
                provider={infoCard.provider}
                adress={infoCard.adress}
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
