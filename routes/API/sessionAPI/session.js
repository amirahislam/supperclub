const router = require("express").Router();
const sessionController = require("../../../controllers/sessionController");

router.route("/")
  .post(sessionController.create)

module.exports = router;