const {
  getAllServices,
  getServiceById,
  createService,
  updateServiceById,
  deleteServiceById,
} = require("../controllers/services.controller");

const serviceRouter = require("express").Router();

serviceRouter.get("/services", getAllServices);
serviceRouter.get("/services/:id", getServiceById);
serviceRouter.post("/create-service", createService);
serviceRouter.put("/update-service", updateServiceById);
serviceRouter.delete("/delete-service", deleteServiceById);

module.exports = { serviceRouter };
