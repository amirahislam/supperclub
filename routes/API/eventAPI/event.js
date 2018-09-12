const eventRouter = require("express").Router();
const eventController = require("../../../controllers/eventController");

eventRouter.route("/")
  .get(eventController.findAll)
  .post(eventController.create)

eventRouter.route("/:id")
  .get(eventController.findOne)

module.exports = eventRouter;