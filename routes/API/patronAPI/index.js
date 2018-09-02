const router = require("express").Router();
const patronRoutes = require("./patron");

router.use("/api/patrons", patronRoutes);

module.exports = router;