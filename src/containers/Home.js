import React from 'react';
import Card from '../components/Card';
import Payments from './Payments';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
          <div className='home-grid'>
              <Card ></Card>
              <aside>
                <Payments />
              </aside>
          </div>
        )
    }
}