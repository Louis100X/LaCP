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


import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Link>
          <NavLink exact to="/" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white', textDecoration: 'none' }}>Home</NavLink>
        </Link>
        <Link>
          <NavLink exact to="/AboutUs" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white', textDecoration: 'none' }}>AboutUs</NavLink>
        </Link>
        <Link>
          <NavLink exact to="/ContactUs" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white', textDecoration: 'none' }}>ContactUs</NavLink>
        </Link>
        








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
