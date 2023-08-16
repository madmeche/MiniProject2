'use strict'

const Models = require('../models')

const getPlant = (res) => {
Models.Plant.findAll({
    where: {
      type: "9a", // main search param
      [Op.or]: [
        {sun_exposure: "1-3"},
        {sun_exposure: "3-6"}
      ]
    }
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(err => {
        console.log("Error:", err)
        throw err
      })
})
}

module.exports = {
  getPlant, 
  // createPlant, updatePlant, deletePlant
}
