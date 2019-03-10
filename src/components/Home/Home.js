import React, { Component } from 'react';
import '../../css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <div className="home__container">
          <h1 className="home__headline">Plan your perfect night</h1>
          <p className="home__content">With DateNight, planning becomes quick and easy</p>
          <input className="home__button" type="button" value="Try Now!" />
        </div>
      </div>
    )
  }
}

export default Home;
