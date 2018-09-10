const db = require("../models");
const Patron = require("../models/patron")
const passport = require("../server/passport")

module.exports = {
  findAll: function(req, res) {
    db.Patron
      .find({})
      .then(dbModel => res.json(dbModel))
  },
  findById: function(req, res) {
    console.log("find by id");
    console.log(req.params)
    db.Patron
      .find({username: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsernamePassword: function(req, res, next) {
    // Insert function from patron.js here if there is time
  },
  findOneAndUpdate: function (req, res) {
    db.Patron
      .update({$push: {following: req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.Patron
      .post(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Patron
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Patron
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};