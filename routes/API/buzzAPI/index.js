const buzzRouter = require("express").Router();
const buzzRoutes = require("./buzz");

buzzRouter.use("/buzz", buzzRoutes);

module.exports = buzzRouter;