const express = require('express');

const route = express.Router();
const hikes = require('../../data/hikes.json');

route.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(hikes));
});

route.get('/:hikeId', (req, res) => {
  const hikeId = req.params.hikeId;
  // harcoded for europe
  // need to revist the json structure later
  const selectedHike = hikes.europe.filter(hike => hike.id === hikeId).pop();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(selectedHike));
});

module.exports = route;
