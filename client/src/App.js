import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
// import API from "../utils/API"
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutUsPage from "../src/pages/AboutUsPage";
import ContactUsPage from "../src/pages/ContactUsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <div className="content">
            <Route exact path="/" component={HomePage} />
            <Route path="/AboutUs" component={AboutUsPage} />
            <Route path="/ContactUs" component={ContactUsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
