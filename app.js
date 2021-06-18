const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("IT Woekdedd");
});

app.get("/new", (req, res) => {
  res.send("IT  Woekdedd new new");
});

app.listen(process.env.PORT || 5000);

module.exports = app;
