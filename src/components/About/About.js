import React, { Component } from 'react';
import '../../css/About.css';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <Row noGutters className="about__row--title">
          <Col xs="12" className="text-center">
            <h2 className="about__headline mb-0">How it works</h2>
          </Col>
        </Row>
        <Row className="about__row--choices">
          <Col xs="12" md="4">
            <div className="about__content-container text-center">
              <FontAwesomeIcon className="about__icon" icon="wine-glass" size="3x" />
              <h4 className="about__content-title">Drink</h4>
              <p className="about__content-text mb-0">Choose a drink to start off with from wine, tea, and more!</p>
            </div>
          </Col>
          <Col xs="12" md="4">
            <div className="about__content-container text-center">
              <FontAwesomeIcon className="about__icon" icon="utensils" size="3x" />
              <h4 className="about__content-title">Cuisine</h4>
              <p className="about__content-text">Pick a cuisine for you and your date to enjoy!</p>
            </div>
          </Col>
          <Col xs="12" md="4">
            <div className="about__content-container text-center">
              <FontAwesomeIcon className="about__icon" icon="ice-cream" size="3x" />
              <h4 className="about__content-title">Dessert</h4>
              <p className="about__content-text">Lastly, satisfy your sweet tooth with sugar!</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About;
