const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/supperclub"
);

const patronSeed = [

  {
    username: "The Dead Zone",
    img: "Stephen King",
    firstName: "Stephen",
    lastName: "King",
    date: new Date(Date.now())
  } 

];

db.Patron
  .remove({})
  .then(() => db.Patron.collection.insertMany(patronSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });