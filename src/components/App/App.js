import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../css/App.css';

import Home from '../Home/Home';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
