const express = require('express');

const route = express.Router();
const hikes = require('../../data/hikes.json');

route.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(hikes));
});

module.exports = route;
