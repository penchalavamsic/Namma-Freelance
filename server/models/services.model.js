const mongoose = require("mongoose");
const { db } = require("./user.model");

const serviceSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    ref: "Profile",
    required: true,
  },
});

const Service = db.model("Service", serviceSchema);

module.exports = Service;
