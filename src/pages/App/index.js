import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "../../styles/app.css";

import withNavigate from "../../utils/wrapper/withNavigate";
import { getUsers } from "../../utils/https/placeholder";
import { uploadImage } from "../../utils/https/auth";

import { themeContext } from "../../contexts/theme";

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
      file: null,
    };
    this.controller = new AbortController();
  }

  async componentDidMount() {
    // bisa jalankan fetch
    // fetchUsers(this.controller)
    //   .then((res) => {
    //     if (!res.ok) throw res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     this.setState({
    //       data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    await getUsers(
      this.controller,
      ({ data }) =>
        this.setState({
          data,
        }),
      (err) => console.log(err)
    );
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

  onChangeHandler = (e) => {
    // console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0],
    });
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
    console.log(this.context);
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
          <div>
            <input type="file" onChange={this.onChangeHandler} />
            <button
              className="btn btn-primary"
              onClick={() => {
                if (this.state.file === null) return;
                uploadImage(this.state.file, this.controller)
                  .then(({ data }) => {
                    console.log(data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Upload
            </button>
          </div>
        </header>
      </div>
    );
  }
}
App.contextType = themeContext;

const AppWithNavigate = withNavigate(App);
export default AppWithNavigate;
