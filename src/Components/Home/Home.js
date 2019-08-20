import React, {Component} from 'react';

class Home extends Component {

handleClick = () => {
  alert('You are headed to animals!');
  //change location
  this.props.history.push('/animals');
}

  render() {
    console.log(this.props);
    
    return (
      <div>
        <h1>HOME</h1>
        <button onClick={this.handleClick}>Go to Animals</button>
        <img src='https://oilpaintingsshop.files.wordpress.com/2014/04/snow-oil-paintings-reproduction.jpg' alt='home' />
      </div>
    )
  }
}

export default Home;