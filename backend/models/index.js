'use strict';

const User = require("./user");
const Plant = require('./plant');

async function init() {
  await User.sync();
  await Plant.sync();
}

init();

module.exports = {
  User,
  Plant
};
