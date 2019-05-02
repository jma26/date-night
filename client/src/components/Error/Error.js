import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../css/Error.css';

import { connect } from 'react-redux';

const Error = () => (
  <div className="Error">
    <h1 className="Error__404">404</h1>
    <p className="Error__content">Sorry! Something went wrong with our site</p>
    <p className="Error__content">Please visit the site and try again</p>
    <Link className="Error__retry-link" to="/">Try again</Link>
  </div>
);

const mapStateToProps = (state) => {
  return state;
}

export default withRouter(connect(mapStateToProps, null)(Error));
