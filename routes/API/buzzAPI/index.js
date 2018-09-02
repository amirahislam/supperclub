const buzzRouter = require("express").Router();
const buzzRoutes = require("./buzz");

buzzRouter.use("/api/buzz", buzzRoutes);

module.exports = buzzRouter;