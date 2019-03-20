const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Serve static files from client-side
app.use(express.static(path.join(__dirname, '../build')));

// Handle cors
app.use(cors());
// Handle requested data with body-parser, turn on object nesting
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/businesss', (req, res) => {
  console.log('Sending...');
  res.send('Testing');
})

// Catch all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../build/index.html'));
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
