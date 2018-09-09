import axios from "axios";

export default {
  // Gets the patron with the given id
  getPatron: function(id) {
    return axios.get("/api/patrons/" + id);
  },
  // Gets all patrons
  getPatrons: function() {
    return axios.get("/api/patrons/")
  },
  // Deletes the book with the given id
  deletePatron: function(id) {
    return axios.delete("/api/patrons/" + id);
  },
  saveFollow: function(id, patronName) {
    return axios.put("/api/patrons/" + id, patronName)
  },
  // Saves a patron to the database (upon signup)
  savePatron: function(patronData) {
    return axios.post("/api/patrons", patronData);
  },
  // Checks for patron username, password match (upon login)
  loginPatron: function(patronData) {
    return axios.post("/api/patrons/login", patronData);
  },
  createSession: function(sessionData) {
    console.log(sessionData);
    return axios.post("/api/sessions", sessionData);
  },
  checkSession: function(sessionData) {
    return axios.post("/api/sessions/checksession", sessionData);
  },
  createBuzz: function(buzz) {
    return axios.post("/api/buzz", buzz)
  },
  getBuzz: function() {
    return axios.get("/api/buzz")
  },
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData)
  },
  getEvents: function() {
    return axios.get("/api/events")
  }

};