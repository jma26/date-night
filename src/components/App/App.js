import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import '../../css/App.css';

import { connect } from 'react-redux';
import { fetchYelpData } from '../../actions';

import Home from '../Home/Home';
import MapContainer from '../Map/MapContainer';
import Error from '../Error/Error';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faWineGlass, faUtensils, faIceCream } from '@fortawesome/free-solid-svg-icons';
library.add(faWineGlass, faUtensils, faIceCream);

const initialDateState = {
  location: '',
  drink: 'Wine',
  cuisine: 'Chinese',
  dessert: 'Ice cream',
}

var formData = {};

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
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    // Prevent refreshing of /map without redux data
    // Redirect to '/'
    if (Object.keys(this.props.yelpData).length == 0) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate(prevProps) {
    // Render Error component if error is present
    console.log(this.props.yelpData);
    if (prevProps.yelpData !== this.props.yelpData && this.props.yelpData.hasError) {
      this.props.history.push('/error');
    }
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
    formData = {
      location: this.state.location,
      drink: this.state.drink,
      cuisine: this.state.cuisine,
      dessert: this.state.dessert
    };
    this.props.fetchYelpData(formData);
    this.setState({
      ...initialDateState,
    });
    this.props.history.push('/map');
  }

  handleRefresh() {
    console.log(formData);
    this.props.fetchYelpData(formData);
    this.props.history.push('/map');
  }

  render() {
    return (
        <div className="App">
            <Switch>
              <Route exact path="/" render={() =>
                <Home
                  isTop={this.state.isTop}
                  location={this.state.location}
                  drink={this.state.drink}
                  cuisine={this.state.cuisine}
                  dessert={this.state.dessert}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                />
                }
              />
              <Route path="/map" render={() =>
                <MapContainer
                  onRefresh={this.handleRefresh}
                />
                }
              />
              <Route path="/error" component={Error} />
            </Switch>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    fetchYelpData: (input) => {
      dispatch(fetchYelpData(input));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
