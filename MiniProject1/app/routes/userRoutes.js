const express = require("express");
const userController = require('../controllers/userController');
const userModel = require('../models/userModel');
const userRoutes = express.Router();

userRoutes.get('/user', (req, res) => {
    userController.getUserData(req,res);
});

module.exports = {
    userRoutes
};