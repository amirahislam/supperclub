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
        console.log("create buzz");
        console.log(req.body);
        db.Buzz
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    
//   db.Buzz.create({ username: "testUsername6", buzz: "here is some buzz" })
//     .then(function(dbBuzz) {
//       console.log(dbBuzz)
//       res.json(dbBuzz)

  };