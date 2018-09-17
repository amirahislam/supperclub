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
      .update({ _id: req.params.id }, { $push: { following: req.body }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findOneAndDelete: function(req, res) {
    db.Patron
      .findByIdAndUpdate({_id: req.params.id }, { $pull: { following: { patronId: req.params.followid }}}, { multi: true }, function(err,model) {
        if(err){
          console.log(err);
          return res.send(err);
         }
         return res.json(model);
      })
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.Patron
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Patron
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};