import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/plants'>Plants</Link>
          </li>
          <li>
            <Link to='/animals'>Animals</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
     );
  }
}
 
export default NavBar;