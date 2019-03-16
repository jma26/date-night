import React, { Component } from 'react';
import '../../css/Home.css';

import About from '../About/About';
import FormInput from '../FormInput/FormInput';

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
        <About />
        <FormInput {...this.props} />
      </div>
    )
  }
}

export default Home;
