import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/Error.css';

import { connect } from 'react-redux';

const Error = () => (
  <div className="Error">
    <p>Error encountered</p>
  </div>
);

const mapStateToProps = (state) => {
  return state;
}


export default withRouter(connect(mapStateToProps, null)(Error));
