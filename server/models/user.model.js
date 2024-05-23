const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema({
  userid: { unique: true, type: String },
  name: String,
  email: {
    type: String,
    unique: true,
  },
  hashedPassword: {
    type: String,
    unique: true,
  },
});

const UserModel = db.model("User", userSchema);

module.exports = UserModel;
