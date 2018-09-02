const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("find buzz");
        db.Buzz
          .find({})
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        console.log("you created buzz");
        console.log(req.body);
        db.Buzz
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

  };