const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/API/patronAPI");
// const routes = require("./routes")
const buzzRoutes = require("./routes/API/buzzAPI");
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
app.use(routes, buzzRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supperclub");

// app.get("/api/buzz", (req, res) => {
//   db.Buzz.findAll({})
//     .then(dbBuzz => res.json(dbBuzz))
// })

// app.post("/api/buzz", (req, res) => {
//   db.Buzz.create({ username: "testUsername6", buzz: "here is some buzz" })
//     .then(function(dbBuzz) {
//       console.log(dbBuzz)
//       res.json(dbBuzz)
//     });
// })

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});