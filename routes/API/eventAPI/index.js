const eventRouter = require("express").Router();
const eventRoutes = require("./event");

eventRouter.use("/api/events", eventRoutes);

module.exports = eventRouter;