import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// class NamaKomponen extends Component {//implementasi komponen}
class App extends Component {
  // state merupakan variabel lokal dari class (object)
  // jika state berubah maka komponen diperbaharui dom nya (rerender)
  // untuk mengubah state gunakan method setState
  state = {
    counter: 0,
    address: "Jakarta",
  };
  changeCounter = () => {
    this.setState({
      counter: 2,
    });
    // this.state.counter = 2;
  };
  render() {
    // console.log(this.state.counter);
    // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href={this.props.href} target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.changeCounter}>Change Counter</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
