const router = require("express").Router();
const patronController = require("../../../controllers/patronController");
const passport = require("../../../server/passport");
const express = require("express");

router.route("/")
  .post(patronController.create)
  .get(patronController.findAll)

// router.route("/login")
//   .post(patronController.findByUsernamePassword)

router.post(
  '/login',
  function (req, res, next) {
      console.log("logging in");
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
  },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
          username: req.user.username
      };
      res.send(userInfo);
  }
)

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.route("/:id")
  .get(patronController.findById)
  .put(patronController.findOneAndUpdate)
  .delete(patronController.remove);

module.exports = router;