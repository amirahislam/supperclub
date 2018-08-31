const router = require("express").Router();
const patronRoutes = require("./patron");

// Book routes
router.use("/patron", patronRoutes);

module.exports = router;