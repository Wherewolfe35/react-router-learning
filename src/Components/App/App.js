import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import Animals from '../Animals/Animals.js';
import Plants from '../Plants/Plants.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import NavBar from '../NavBar/NavBar.js';

class App extends Component {
  handleClick = (path) => {
    alert(`You are headed to ${path}!`);
    //change location
    this.props.history.push(path);
  }

  render() {
    console.log(this.state);
    
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />{/* <Home /> 'exact' allows the browser to load home only when at /,not /plants*/}
          <Route path='/plants' component={Plants} /> {/* Uh oh, can't pass props without redux! */}
          <Route path='/animals' component={Animals} />
          <Route path='/about' component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
