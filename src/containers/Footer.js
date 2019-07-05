import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul style={{ gridColumn: "1 / 10" }}>
          <li>Карта терминалов</li>
          <li>Безопасность</li>
          <li>Помощь</li>
          <li>
            <Link to="/offers">Оферты</Link>
          </li>
        </ul>

        <div className="call-center">
          <b>5505</b>
          <small>Бесплатная горячая линия</small>
        </div>

        <ul style={{ gridColumn: "1 / 13" }}>
          <li>Контакты</li>

          <li>Бизнесу</li>
          <li>
            <Link to="/job">Работа в QPay</Link>
          </li>
        </ul>
        <copy style={{ gridColumn: "1 / 13", justifySelf: "end" }}>
          © 2018, ҶДММ “Пардохти Фаврӣ”
        </copy>
        <address style={{ gridColumn: "1 / 13", justifySelf: "end" }}>
          Таджикистан, г. Душанбе, просп. Исмоила Сомони, ул. М. Турсунзода 45
        </address>
      </footer>
    );
  }
}
