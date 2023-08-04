const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

//localhost:8080/api/auth/signup
router.post("/signup", (req, res) => {
  Controllers.authController.signUpUser(req.body, res)
})

//localhost:8080/api/auth/login
router.post("/login", (req, res) => {
  Controllers.authController.loginUserByEmail(req, res)
})

module.exports = router;