const buzzRouter = require("express").Router();
const buzzController = require("../../../controllers/buzzController");

buzzRouter
  .route("/")
  .get(buzzController.findAll)
  .post(buzzController.create)

module.exports = buzzRouter;