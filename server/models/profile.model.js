const mongoose = require("mongoose");
const { db } = require("./user.model");

const profileSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    enum: ["client", "freelancer"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: String,
  bio: String,
  skills: [String],
  portfolio: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
  education: [
    {
      degree: String,
      institution: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  socialLinks: {
    instagram: String,
    facebook: String,
    youtube: String,
  },
});

const Profile = db.model("Profile", profileSchema);

module.exports = Profile;
