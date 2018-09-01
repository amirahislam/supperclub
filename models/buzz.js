const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buzzSchema = new Schema({
  username: { type: String, required: true },
  buzz: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Buzz = mongoose.model("Buzz", buzzSchema);

module.exports = Buzz;