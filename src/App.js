import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';
import Layout from './containers/Layout';
import Home from './containers/Home';
import Payments from './containers/Payments';
import Advertising from './containers/Advertising';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/payments' component={Payments} />
        <Route exact path='/advertising' component={Advertising} />
      </Layout>
    );
  }
}

export default App;
