require('dotenv').config();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// Initializations
const app = express();

// Settings
app.set('port', 3000)

// middlewares
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));


// Routes
app.use(require('./routes/index'));

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

module.exports = app
