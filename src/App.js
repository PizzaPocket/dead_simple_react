import React, { Component } from 'react';
import "./styles/scss/style.scss";
import MyComponent from './components/MyComponent.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div className="container">
        <h1>hey buddy</h1>
        <h2>drugs is cool</h2>
          <MyComponent />
      </div>
    );
  }
}
