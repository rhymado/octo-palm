import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "../../styles/app.css";

import withNavigate from "../../utils/wrapper/withNavigate";

// class NamaKomponen extends Component {//implementasi komponen}
class App extends Component {
  //
  // state merupakan variabel lokal dari class (object)
  // jika state berubah maka komponen diperbaharui dom nya (rerender)
  // untuk mengubah state gunakan method setState
  constructor(props) {
    super();
    this.state = {
      counter: 0,
      address: "Jakarta",
      age: props.age,
      data: [],
    };
    this.controller = new AbortController();
  }

  componentDidMount() {
    // bisa jalankan fetch
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: this.controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw res.status;
        return res.json();
      })
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch((err) => {
        // if (this.controller.signal.aborted) return;
        console.log(err.message);
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState);
  // }

  componentWillUnmount() {
    // this.controller.abort();
  }

  handleNavigate(to) {
    if (this.state.counter !== 2) {
      return;
    }
    this.props.navigate(to);
  }

  changeCounter = () => {
    this.setState({
      counter: 2,
    });
    // this.state.counter = 2;
  };
  render() {
    // console.log(this.state.counter);
    // console.log(this.props);
    // if (this.state.data.length === 0) {
    //   return (
    //     <div>
    //       <p>Loading</p>
    //     </div>
    //   );
    // }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <a className="App-link" href={this.props.href} target="_blank" rel="noopener noreferrer">
            Learn React
          </a> */}
          <Link to="/home">Home</Link>
          <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.changeCounter}>Change Counter</button>
          </div>
          <div>
            <button onClick={() => this.handleNavigate("/home")}>View CV</button>
          </div>
        </header>
      </div>
    );
  }
}

const AppWithNavigate = withNavigate(App);
export default AppWithNavigate;
