const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const dummy = require('./dummy.js');
const cors = require('cors');
const axios = require('axios');

app.use(cors())

//default
app.get('/', (req, res) => {
  axios.get('http://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then((response) => res.status(200).send(response.data))
})
//by ingredient
app.get('/filter/:query', (req, res) => {
  axios.get(`http://thecocktaildb.com/api/json/v1/1/filter.php?i=${req.params.query}`)
    .then((response) => { res.status(200).send(response.data) })
})
//by drink name
app.get(`/search/:query`, (req, res) => {
  axios.get(`http://thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.query}`)
    .then((response) => { res.status(200).send(response.data) })
})
//by drink id
app.get(`/lookup/:query`, (req, res) => {
  axios.get(`http://thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.query}`)
    .then((response) => { res.status(200).send(response.data) })
})

app.listen(port, () => {
  console.log('Cocktail Server listening on port ' + port);
})

module.exports = app;