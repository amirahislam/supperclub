const db = require("../models");

module.exports = {
    findOneAndUpdate: function(req, res) {
        console.log("you joined an event");
        db.Event
        .findByIdAndUpdate( { _id: req.params.id }, { $push: {guestArray: req.body} } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };