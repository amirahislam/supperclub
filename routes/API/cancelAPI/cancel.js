const cancelRouter = require("express").Router();
const cancelController = require("../../../controllers/cancelController");

cancelRouter.route("/:id")
  .put(cancelController.findOneAndUpdate)

module.exports = cancelRouter;