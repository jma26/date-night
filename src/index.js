import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';

// Bootswatch theme
import './assets/bootswatch/bootstrap.css';

import './css/index.css';
import App from './components/App/App';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
