const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// middlewares
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));
app.use(
    bodyParser.json({
        limit: '30mb',
        extended: true,
    })
);

app.use(
    bodyParser.urlencoded({
        limit: '30mb',
        extended: true,
    })
);

app.use(cors());

app.use(morgan('combined'));

// routes
const subscriberRoute = require('./routes/subscriber');
const registerRoute = require('./routes/register');

app.use('/subscriber', subscriberRoute);
app.use('/register', registerRoute);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
