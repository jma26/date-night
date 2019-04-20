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
    } else if (!this.props.isFetching && this.props.drink && this.props.restaurant && this.props.dessert) {

      window.L.mapquest.key = `${process.env.REACT_APP_MAPQUEST_KEY}`;

      var map = window.L.mapquest.map('map', {
        center: [37.7749, -122.4194],
        layers: window.L.mapquest.tileLayer('map'),
        zoom: 12
      });

      map.zoomControl.setPosition('topright');

      var directions = window.L.mapquest.directions();

      directions.setLayerOptions({
        startMarker: {
          icon: 'circle',
          draggable: false,
          iconOptions: {
            size: 'sm',
            primaryColor: '#1FC715',
            secondaryColor: '#1FC715',
            symbol: 'A'
          },
          title: 'Drink'
        },
        endMarker: {
          icon: 'circle',
          draggable: false,
          iconOptions: {
            size: 'sm',
            primaryColor: '#E9304F',
            secondaryColor: '#E9304F',
            symbol: 'C'
          },
          title: 'Dessert'
        },
        waypointMarker: {
          icon: 'circle',
          draggable: false,
          iconOptions: {
            size: 'sm',
            primaryColor: '#E84393',
            secondaryColor: '#E84393',
            symbol: 'B'
          },
          title: 'Restaurant'
        },
        routeRibbon: {
          color: "#2aa6ce",
          opacity: 1.0,
          showTraffic: false
        },
        alternateRouteRibbon: {
          opacity: 1.0
        },
      });

      // Route directions from multiple locations
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
        <div id="map" style={mapStyles} />
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
