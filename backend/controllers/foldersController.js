const Models = require('../models')

// const getPlant = (res) => {
// Models.Plant.findAll({
//     where: {
//       type: "9a", // main search param
//       [Op.or]: [
//         {sun_exposure: "1-3"},
//         {sun_exposure: "3-6"}
//       ]
//     }
//     .then((data) => {
//         res.send({result: 200, data: data})
//     })
//     .catch(err => {
//         console.log("Error:", err)
//         throw err
//       })
// })
// }

const createFolder = async (data, res) => {
    
    Models.Folder.create(data)
   
      .then((data) => {
        res.status(201).json({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  const updateFolder = (req, res) => {
    console.log("Controller:", req.body)
    Models.Folder.update(req.body, { where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  const deleteFolder = (req, res) => {
    console.log("Controller:", req.body)
    Models.Folder.destroy( {where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  module.exports = {
    createFolder, updateFolder, deleteFolder
  }

