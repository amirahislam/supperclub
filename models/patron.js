const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patronSchema = new Schema({
  username: { type: String, required: true },
  img: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Patron = mongoose.model("Patron", patronSchema);

module.exports = Patron;