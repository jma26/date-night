import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../css/App.css';

import Home from '../Home/Home';
import Header from '../Header/Header';

import { Container } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faWineGlass, faUtensils, faIceCream } from '@fortawesome/free-solid-svg-icons';
library.add(faWineGlass, faUtensils, faIceCream);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.Top) {
        this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header isTop={this.state.isTop} />
        <Container fluid className="app__container pl-0 pr-0">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
