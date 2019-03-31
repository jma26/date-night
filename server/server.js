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
  const result = [];
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
  const businessInstance = axios.create(foodConfig);
  const drinkInstance = axios.create(drinkConfig);
  const dessertInstance = axios.create(dessertConfig);

  Promise.all([businessInstance.get(), drinkInstance.get(), dessertInstance.get()])
  .then(promises => {
    // We have an array response and need to retrieve the data property
    // With the data property, select one randomized response and return it in its appropriate category
    promises.forEach(promise => {
      let randomResult = promise.data.businesses[Math.floor((Math.random() * promise.data.businesses.length) + 1)];
      result.push(randomResult);
    })
    // Respond to client with the result
    res.send(result);
  })
  .catch(error => {
    res.send(error);
  })
})

// Catch all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../build/index.html'));
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
