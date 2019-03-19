import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../css/App.css';

import { connect } from 'react-redux';
import { location, dessertChoice, drinkChoice, cuisineChoice} from '../../actions';

import Home from '../Home/Home';
import Header from '../Header/Header';

import { Container } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faWineGlass, faUtensils, faIceCream } from '@fortawesome/free-solid-svg-icons';
library.add(faWineGlass, faUtensils, faIceCream);

const initialDateState = {
  location: '',
  drink: 'Wine',
  cuisine: 'Chinese',
  dessert: 'Ice cream',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      ...initialDateState
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateLocation(this.state.location);
    this.props.updateCuisine(this.state.drink);
    this.props.updateDrink(this.state.cuisine);
    this.props.updateDessert(this.state.dessert);
    this.setState({
      ...initialDateState,
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
                  onSubmit={this.handleSubmit}
                />
              }
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLocation: (input) => {
      dispatch(location(input));
    },
    updateDessert: (input) => {
      dispatch(dessertChoice(input));
    },
    updateDrink: (input) => {
      dispatch(drinkChoice(input));
    },
    updateCuisine: (input) => {
      dispatch(cuisineChoice(input));
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
