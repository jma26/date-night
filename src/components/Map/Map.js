import React, { Component } from 'react';
import '../../css/About.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Map">
        <h1>Testing</h1>
      </div>
    )
  }
}

const mapStateToProps = {

}

export default withRouter(connect()(Map));
