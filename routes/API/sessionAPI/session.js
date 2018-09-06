const router = require("express").Router();
const sessionController = require("../../../controllers/sessionController");

router.route("/")
  .post(sessionController.create)

router.route("/checksession")
  .post(sessionController.checkSession)

// router.route("/logout")
//   .get(sessionController.logOut)

module.exports = router;