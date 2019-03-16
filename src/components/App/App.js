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
      location: '',
      drink: 'Wine',
      cuisine: 'Chinese',
      dessert: 'Ice cream',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.Top) {
        this.setState({ isTop })
      }
    });
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header isTop={this.state.isTop} />
        <Container fluid className="app__container pl-0 pr-0">
          <Switch>
            <Route
              exact path="/"
              render={(props) =>
                <Home
                  {...props}
                  location={this.state.location}
                  drink={this.state.drink}
                  cuisine={this.state.cuisine}
                  dessert={this.state.dessert}
                  onChange={this.handleChange}
                />
              }
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
