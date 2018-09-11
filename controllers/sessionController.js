const db = require("../models");

module.exports = {
  // findAll: function(req, res) {
  //   db.Patron
  //     .find({})
  //     .then(dbModel => res.json(dbModel))
  // },
  checkSession: function(req, res) {
    console.log("Checking session")
    console.log(req.params);
    console.log(req.params.id);
    db.Session
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create session");
    db.Session
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  logout: function(req, res) {
    console.log("logout");
  }
  // update: function(req, res) {
  //   db.Patron
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Patron
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};