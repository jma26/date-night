import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/App.css';

import { connect } from 'react-redux';
import { fetchYelpData } from '../../actions';

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
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const isTop = window.scrollY < 100;
      if (isTop !== this.state.Top) {
        this.setState({ isTop })
      }
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      location: this.state.location,
      drink: this.state.drink,
      cuisine: this.state.cuisine,
      dessert: this.state.dessert
    };
    this.props.fetchYelpData(formData);
    this.setState({
      ...initialDateState,
      // Redirect to Map component
    }, this.props.history.push("/map"));

  }

  render() {
    return (
      <div className="App">
        <Header isTop={this.state.isTop} />
        <Container fluid className="app__container pl-0 pr-0">
          <Home
            location={this.state.location}
            drink={this.state.drink}
            cuisine={this.state.cuisine}
            dessert={this.state.dessert}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchYelpData: (input) => {
      dispatch(fetchYelpData(input));
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
