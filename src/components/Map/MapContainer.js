import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../Loading/Loading';
import Map from './Map';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MapContainer">
        {
          this.props.isFetching ? <Loading /> : <Map />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.yelpData.isFetching,
  }
}

export default withRouter(connect(mapStateToProps, null)(MapContainer));
