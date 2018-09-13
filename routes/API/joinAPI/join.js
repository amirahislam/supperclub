const joinRouter = require("express").Router();
const joinController = require("../../../controllers/joinController");

joinRouter.route("/:id")
  .put(joinController.findOneAndUpdate)

module.exports = joinRouter;