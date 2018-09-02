const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patronSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  userType: { type: String, required: true },
  img: { type: String },
  date: { type: Date, default: Date.now }
});

const Patron = mongoose.model("Patron", patronSchema);

module.exports = Patron;