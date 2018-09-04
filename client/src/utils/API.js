import axios from "axios";

export default {
  // Gets the patron with the given id
  getPatron: function(id) {
    return axios.get("/api/patron/" + id);
  },
  // Deletes the book with the given id
  deletePatron: function(id) {
    return axios.delete("/api/patron/" + id);
  },
  // Saves a patron to the database (upon signup)
  savePatron: function(patronData) {
    return axios.post("/api/patrons", patronData);
  },
  // Checks for patron username, password match (upon login)
  loginPatron: function(patronData) {
    return axios.post("/api/patrons/login", patronData);
  },
  createBuzz: function(buzz) {
    return axios.post("/api/buzz", buzz)
  },
  getBuzz: function() {
    return axios.get("/api/buzz")
  }
};