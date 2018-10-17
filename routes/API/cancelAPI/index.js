const cancelRouter = require("express").Router();
const cancelRoutes = require("./cancel");

cancelRouter.use("/api/cancel", cancelRoutes);

module.exports = cancelRouter;