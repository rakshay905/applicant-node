const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.use('/api', require('./server/routes/index'))

app.use(express.static(__dirname + '/build'))



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `build/index.html`))
});

module.exports = app;