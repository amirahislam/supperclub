const db = require("../models");

module.exports = {
    findOneAndUpdate: function(req, res) {
        console.log("you canceled an event");
        console.log(req.params.id);
        console.log(req.body);
        db.Event
        .findByIdAndUpdate( { _id: req.params.id }, { $pull: {guestArray: req.body}, $inc: { spotsLeft: +1 } } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };