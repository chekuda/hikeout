const express = require('express');
const app = express();

const hikes = require('./api-hikeout/hikes');

app.use('/api-hikeout/hikes', hikes);

module.exports = app;
