const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/API");
const app = express();
const path = require("path");
const db = require("./models");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supperclub");

app.get("/api/test", (req, res) => {
  res.send("Testing.")
  // db.Patron.find({})
  // .then(dbPatron => res.json(dbPatron))
});

app.get("/testdb", (req, res) => {
  db.Patron.create({ username: "testUsername1", img: "testImg1", firstName: "testFirst1", lastName: "testLast1" })
    .then(function(dbPatron) {
      res.json(dbPatron)
    });
});

app.get("/api/patrons", (req, res) => {
  db.Patron.find({})
  .then(dbPatron => res.json(dbPatron))
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});