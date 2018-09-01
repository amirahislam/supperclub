const router = require("express").Router();
const patronController = require("../../../controllers/patronController");

router.route("/")
  .post(patronController.create)

router
  .route("/:id")
  .get(patronController.findById)
  .put(patronController.update)
  .delete(patronController.remove);

module.exports = router;