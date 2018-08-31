const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/test", (req, res) => {
    res.send("Test.")
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
});