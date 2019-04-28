const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const app = express();
const axios = require('axios');

// Enables use of .env variables
// Bug? Idk why I can't use CRA .env variablers with REACT_APP prefix so had to use dotenv
require('dotenv').config();

// PORT
const PORT = process.env.PORT || 5000;

// Serve static files from client-side
app.use(express.static(path.join(__dirname, '../build')));

// Handle cors
app.use(cors());
// Handle requested data with body-parser, turn on object nesting
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Global axios defaults
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_YELP_KEY}`;

app.post('/business', (req, res) => {
  console.log('Detecting..../business url route');
  const result = {};
  let parameters = {
    ...req.body
  }

  // Config files for Axios instance
  // Cuisine config
  let foodConfig = {
    url: '/businesses/search',
    baseURL: 'https://api.yelp.com/v3/businesses/search',
    method: 'get',
    params: {
      term: `${parameters.cuisine} restaurants`,
      limit: 50,
      location: parameters.location
    }
  }
  // Drink config
  let drinkConfig = {
    url: '/businesses/search',
    baseURL: 'https://api.yelp.com/v3/businesses/search',
    method: 'get',
    params: {
      term: `${parameters.drink} bars`,
      limit: 50,
      location: parameters.location
    }
  }
  // Dessert config
  let dessertConfig = {
    url: '/businesses/search',
    baseURL: 'https://api.yelp.com/v3/businesses/search',
    method: 'get',
    params: {
      term: `${parameters.dessert}`,
      limit: 50,
      location: parameters.location
    }
  }

  // Axios Instances
  const restaurantInstance = axios.create(foodConfig);
  const drinkInstance = axios.create(drinkConfig);
  const dessertInstance = axios.create(dessertConfig);

  // Chaining the promises > Promise.all, that way we can if each promise is fulfilled one by one and if one is rejected - we undergo fast rejection in the catch block
  drinkInstance.get()
  .then(promise => {
    if (!promise.data || promise.data.businesses.length < 1) {
      throw new Error('Null or undefined promise detected');
    } else {
      result.drink = promise.data.businesses[Math.floor((Math.random() * promise.data.businesses.length) + 1)];
      return restaurantInstance.get();
    }
  })
  .then(promise => {
    if (!promise.data || promise.data.businesses.length < 1) {
      throw new Error('Null or undefined promise detected');
    } else {
      result.restaurant = promise.data.businesses[Math.floor((Math.random() * promise.data.businesses.length) + 1)];
      return dessertInstance.get();
    }
  })
  .then(promise => {
    if (!promise.data || promise.data.businesses.length < 1) {
      throw new Error('Null or undefined promise detected');
    } else {
      result.dessert = promise.data.businesses[Math.floor((Math.random() * promise.data.businesses.length) + 1)];
      result.status = promise.status;
      res.send(result);
    }
  }).catch(error => {
    // Null or defined promises in promise chain
    if (error.message == 'Null or undefined promise detected') {
      res.send({status: 204});
      // Bad request error such as 400
    } else if (error.response.status == 400) {
      res.send(error.response.status);
    }
  });

})

// Catch all requests
app.get('*', (req, res) => {
  // Need to change to /build pathway for deployment
  res.sendFile(path.join(__dirname + '/../public', index.html));
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
