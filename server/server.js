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

app.post('/business', (req, res) => {
  let parameters = {
    ...req.body
  }

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

  // Axios Instances
  const businessInstance = axios.create(foodConfig)
  businessInstance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_YELP_KEY}`;

  businessInstance.get().then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error);
  })
  res.send('Response successful from /business');
})

// Catch all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../build/index.html'));
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
