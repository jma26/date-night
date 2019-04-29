import React, { Component } from 'react';
import '../../css/Loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Loading">
        <h1 className="Loading__heading">Loading
          <span className="Loading__dot-indicator">.</span>
          <span className="Loading__dot-indicator">.</span>
          <span className="Loading__dot-indicator">.</span>
        </h1>
        <div className="Loading__spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }
}

export default Loading;
