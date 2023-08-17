'use strict';

const User = require("./user");
const Plant = require('./plant');
const Folder = require('./folder');
const Favorite = require('./favorite')

async function init() {
  await User.sync();
  await Plant.sync();
  await Folder.sync()
  await Favorite.sync()
}

init();

module.exports = {
  User,
  Plant,
  Folder,
  Favorite
};
