import React, { Component } from 'react';
import '../../css/About.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Redirect to '/' if redux state is undefined or null
    // Prevents refreshing on '/map' that will end up throwing an undefined error
    if (!this.props.drink || !this.props.restaurant || !this.props.dessert) {
      this.props.history.push('/');
    } else {
      window.L.mapquest.key = `${process.env.REACT_APP_MAPQUEST_KEY}`;
      var map = window.L.mapquest.map('map', {
        center: [37.7749, -122.4194],
        layers: window.L.mapquest.tileLayer('map'),
        zoom: 12
      });
      // Position zoom control
      map.zoomControl.setPosition('topright');

      // Directions from multiple locations
      var directions = window.L.mapquest.directions();
      directions.route({
        locations: [
          {latLng: {lat: this.props.drink.coordinates.latitude, lng: this.props.drink.coordinates.longitude}},
          {latLng: {lat: this.props.restaurant.coordinates.latitude, lng: this.props.restaurant.coordinates.longitude}},
          {latLng: {lat: this.props.dessert.coordinates.latitude, lng: this.props.dessert.coordinates.longitude}}
        ]
      });
    }
  }

  render() {
    const mapStyles = {
      height: '100vh',
      width: '100vw'
    }

    return (
      <div className="Map">
        <div id="map" style={mapStyles}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drink: state.yelpData.drink,
    restaurant: state.yelpData.restaurant,
    dessert: state.yelpData.dessert,
  }
}

export default withRouter(connect(mapStateToProps, null)(Map));
