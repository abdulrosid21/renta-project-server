const express = require("express");

const Router = express.Router();

const vehicleController = require("../controllers/vehicle");

Router.get("/", vehicleController.getAllVehicles);
Router.get("/:id", vehicleController.getVehicleById);
Router.get("/type/:id", vehicleController.getVehicleByType);
Router.post("/", vehicleController.addNewVehicle);
Router.patch("/:id", vehicleController.updateVehicle);

module.exports = Router;
