const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("find event");
        db.Event
          .find({})
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        console.log("you created an event");
        console.log(req.body);
        db.Event
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

  };