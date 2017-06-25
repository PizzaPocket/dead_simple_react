import React, { Component } from 'react';
import "./styles/scss/style.scss";
import MyComponent from './components/MyComponent.js';
import TickTackToe from './components/TickTackToe.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div className="container">
        <h1>Dead Simple React</h1>
        <TickTackToe />
      </div>
    );
  }
}
