const { request, response } = require('express');
const LegendaryModel = require('../models/LegendaryModel');

const controller = {
  index: (request, response) => {
  const pokemon = new LegendaryModel(1, 'Pokemon Zika', 'Morador da ZL', 'Maloca')
  return response.json(pokemon)
  }
}

module.exports = controller;