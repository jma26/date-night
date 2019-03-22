const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const app = express();
const axios = require('axios');

// PORT
const PORT = process.env.PORT || 5000;

// Serve static files from client-side
app.use(express.static(path.join(__dirname, '../build')));

// Handle cors
app.use(cors());
// Handle requested data with body-parser, turn on object nesting
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Axios Instances
const businessInstance = axios.create({
  baseUrl: 'https://api.yelp.com/v3/'
})
businessInstance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_YELP_KEY}`;

app.post('/business', (req, res) => {
    let parameters = {
      ...req.body
    }
    console.log(parameters);
  // businessInstance.get(`businesses/search`, {

  // })
  res.send('Response successful from /business');
})

// Catch all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../build/index.html'));
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
