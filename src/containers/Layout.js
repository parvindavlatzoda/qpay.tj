import React, { Fragment } from "react";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import MobileMenu from "../components/MobileMenu";


export default class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <header className="header">  
          <NavMenu />
        </header>
        {/* {this.props.children} */}
        <MobileMenu/>

        <main className="content">{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}
