import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./containers/Layout";
import Home from "./containers/Home";
import Payments from "./containers/Payments";
import Advertising from "./containers/Advertising";
import Charity from "./containers/Charity";
import Offers from "./containers/Offers";
import Job from "./containers/Job";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/advertising" component={Advertising} />
        <Route exact path="/charity" component={Charity} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/job" component={Job} />
      </Layout>
    );
  }
}

export default App;
