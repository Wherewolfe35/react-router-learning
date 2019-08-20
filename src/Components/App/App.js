import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import Animals from '../Animals/Animals.js';
import Plants from '../Plants/Plants.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import NavBar from '../NavBar/NavBar.js';
import { connect } from "react-redux";

class App extends Component {
  handleClick = () => {
    this.props.dispatch(
      {type: 'BUTTON_ONE'}
    )
  }

  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <button onClick={this.handleClick}>Button 1</button>
        <Route exact path='/' component={Home} />{/* <Home /> 'exact' allows the browser to load home only when at /,not /plants*/}
          <Route path='/plants' component={Plants} /> {/* Uh oh, can't pass props without redux! */}
          <Route path='/animals' component={Animals} />
          <Route path='/about' component={About} />
      </div>
      </Router>
    );
  }
}

export default connect()(App);
