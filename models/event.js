const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  username: { type: String, required: true },
  eventName: { type: String, required: true },
  eventImg: { type: String, require: false },
  description: { type: String, required: true },
  menu: { type: String, required: false },
  guests: { type: Number, required: true },
  guestArray: { type: Array, default: [] },
  price: { type: String, required: true },
  rules: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;