import React, { Component } from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import BuySell from "./BuySell";
import Ledger from './Ledger';
import Details from './Details';
import Home from './Home';
import Mine from './Mine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owned: 0,
      value: 1,
      ledger: []
    };
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
    this.mine = this.mine.bind(this);
  }
  buy(number) {
    this.setState(prev => {return {
      owned: prev.owned + number,
      value: prev.value + number,
      ledger: [...prev.ledger, {
        action: "Bought",
        amount: number,
        value: prev.value + number,
        id: prev.ledger.length
      }]
    }});
  }
  sell(number) {
    if(number <= this.state.owned) {
      this.setState(prev => {return {
        owned: prev.owned - number,
        value: prev.value - number,
        ledger: [...prev.ledger, {
          action: "Sold",
          amount: number,
          value: prev.value - number,
          id: prev.ledger.length
        }]
      }});
    }
  }
  mine(number) {
    if(number == 13) {
      this.setState(prev => {return {
        owned: prev.owned + 1,
        value: prev.value + 1,
        ledger: [...prev.ledger, {
          action: "Mined",
          amount: 1,
          value: prev.value + 1,
          id: prev.ledger.length
        }]
      }})
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div>
              <Link to="/home" className="btn btn-secondary">Home</Link>
              <Link to="/mine" className="btn btn-secondary">Mine</Link>
              <Link to="/buy" className="btn btn-secondary">Buy Coins</Link>
              <Link to="/sell" className="btn btn-secondary">Sell Coins</Link>
              <Link to="/ledger" className="btn btn-secondary">Browse Ledger</Link>
            </div>
            <Route path="/home" component={Home} />
            <Route path="/mine" render={(props) => <Mine {...props} submit={this.mine} />} />
            <Route path="/buy" render={(props) => <BuySell {...props} action="Buy" submit={this.buy} owned={this.state.owned} value={this.state.value} />} />
            <Route path="/sell" render={(props) => <BuySell {...props} action="Sell" submit={this.sell} owned={this.state.owned} value={this.state.value} />} />
            <Route path="/ledger" render={(props) => <Ledger {...props} ledger={this.state.ledger} />} />
            <Route path="/transaction/:id" render={(props) => <Details {...props} entry={this.state.ledger[props.match.params.id]} />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
