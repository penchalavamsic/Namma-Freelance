const {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfileById,
  deleteProfileById,
} = require("../controllers/profile.controller");

const profileRouter = require("express").Router();

profileRouter.get("/profiles", getAllProfiles);
profileRouter.get("/profiles/:id", getProfileById);
profileRouter.post("/create-profile", createProfile);
profileRouter.put("/update-profile/:id", updateProfileById);
profileRouter.delete("/delete-profile/:id", deleteProfileById);

module.exports = { profileRouter };
