const Profile = require("../models/profile.model");

// Create a new profile
const createProfile = async (req, res) => {
  try {
    const userProfile = {
      userid: "1",
      ...req.body,
    };
    const profile = await Profile.create(userProfile);
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all profiles
const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({ userType: "freelancer" });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a profile by ID
const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userid: req.params.id });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a profile by ID
const updateProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a profile by ID
const deleteProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfileById,
  deleteProfileById,
};
