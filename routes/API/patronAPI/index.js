const router = require("express").Router();
const patronRoutes = require("./patron");

router.use("/api/patrons", patronRoutes);
router.use("/api/patrons/login", patronRoutes)
router.use("/user", patronRoutes)

module.exports = router;