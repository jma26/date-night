import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../../css/Home.css';

import About from '../About/About';
import FormInput from '../FormInput/FormInput';
import Header from '../Header/Header';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Header isTop={this.props.isTop} />
        <Container fluid className="app__container pl-0 pr-0">
          <div className="home__container">
            <h1 className="home__headline">Plan your perfect night</h1>
            <p className="home__content">With DateNight, planning becomes quick and easy</p>
            <input className="home__button" type="button" value="Try Now!" />
          </div>
          <About />
          <FormInput {...this.props} />
        </Container>
      </div>
    )
  }
}

export default Home;
