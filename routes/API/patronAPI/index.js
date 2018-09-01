const router = require("express").Router();
const patronRoutes = require("./patron");

router.use("/patron", patronRoutes);

module.exports = router;