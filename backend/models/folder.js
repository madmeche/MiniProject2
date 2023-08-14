const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Schema = dbConnect.connectMysql.Schema;

const sequelizeInstance = dbConnect.Sequelize;

class Folder extends Model {}

Folder.init(
// const newFolder = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Folder Title"],
      maxlength: [10, "Title can not be more than 25 characters"],
      minlength: [3, "Title must have atleast three character"],
    },
    description: {
      type: String,
      required: [true, "Place your description here."],
    },
    content: {
      type: Blob,
      require: [true, "Save for later."],
    },
    datePosted: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Folder",
    timestamps: true,
  }
);

module.exports = ("New Folder", Folder);
