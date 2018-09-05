const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const routes = require("./routes/API/patronAPI");
const buzzRoutes = require("./routes/API/buzzAPI");
const eventRoutes = require("./routes/API/eventAPI")
const sessionRoutes = require("./routes/API/sessionAPI");
const dbConnection = require("./server/database");
const passport = require('./server/passport');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

require("dotenv").config()

// Define middleware here
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes, buzzRoutes, eventRoutes, sessionRoutes);

app.use(
  session({
    secret: 'fraggle-rock',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
);

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/supperclub", { useMongoClient: true }, (err) => {
  if (err) console.error(err);

mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/supperclub", { useMongoClient: true }, (err) => {
//     if (err) console.error(err);
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});