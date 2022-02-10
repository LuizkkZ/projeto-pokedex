const LegendaryModel = require('../models/LegendaryModel');

const controller = {
  index: (request, response) => {
    const pokemon = new LegendaryModel(1, 'Pokemon Zika','Morador da ZL', 'Maloca')
  }
}

module.exports = controller;