import React, { Fragment } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <header className='header'>
          <NavMenu />
        </header>
        <main className='content'>
          {this.props.children}
        </main>
        <Footer />
      </Fragment>
    );
  }
}