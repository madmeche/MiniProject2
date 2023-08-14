'use strict';

const User = require("./user");
const Plant = require('./plant');

async function init() {
  await User.sync();
}

async function init() {
  await Plant.sync();
}

init();

module.exports = {
  User,
  Plant
};
