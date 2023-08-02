"use strict";

const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const getUsersById = (req, res) => {
  Models.User.findAll({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const createUsers = async (data, res) => {
  const salt = await bcrypt.genSaltSync(10, "a");
  const originalPassword = data.password;
  const hashedPassword = bcrypt.hashSync(data.password, salt);
  data.password = hashedPassword;

  Models.User.create(data)
    .then((data) => {
      data.password = originalPassword;
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const updateUser = (req, res) => {
  Models.User.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

module.exports = {
  getUsers,
  getUsersById,
  getUsersByIdTestPassword,
  createUsers,
  updateUser,
  deleteUser,
};
