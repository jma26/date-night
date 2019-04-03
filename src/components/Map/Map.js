import React, { Component } from 'react';
import '../../css/About.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.L.mapquest.key = `${process.env.REACT_APP_MAPQUEST_KEY}`;
    var map = window.L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers: window.L.mapquest.tileLayer('map'),
      zoom: 12
    });
    // Position zoom control
    map.zoomControl.setPosition('topright');

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

const mapStateToProps = {

}

export default withRouter(connect()(Map));
