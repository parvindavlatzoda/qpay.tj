import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/qiwi_logo.png';
import './NavMenu.css';

export default class NavMenu extends React.Component {
  render() {
    return (
      <nav>
          <Link to={'/'}>
            <img src={logo} classname="logo" alt="logo" style={{ width: '9.5em'}}/>
          </Link>
        <ul>
          <li>
            <Link to={'/payments'}>Платежи и переводы</Link>
          </li>
          <li>
            <Link to={'/advertising'}>Реклама</Link>
          </li>
          <li>
            <Link to={'/'}>Благотворительность</Link>
          </li>
          <li>
            <Link to={'/'}>Пополнение кошелька</Link>
          </li>
        </ul>
      </nav>
    )
  }
}