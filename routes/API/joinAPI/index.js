const joinRouter = require("express").Router();
const joinRoutes = require("./join");

joinRouter.use("/api/join", joinRoutes);

module.exports = joinRouter;