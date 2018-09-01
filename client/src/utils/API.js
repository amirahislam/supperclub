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
  // Saves a book to the database
  savePatron: function(patronData) {
    return axios.post("/api/patrons", patronData);
  },
  postBuzz: function(buzz) {
    return axios.post("/api/buzz", buzz)
  }
};