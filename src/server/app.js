const express = require('express');
const app = express();

const hikes = require('./api/hikes');

app.use('/api/hikes', hikes);

module.exports = app;
