const eventRouter = require("express").Router();
const eventController = require("../../../controllers/eventController");

eventRouter.route("/")
  .get(eventController.findAll)
  .post(eventController.create)

module.exports = eventRouter;