const express = require("express");
const path = require("path");
var cors = require("cors");
require("dotenv").config();

const getResults = require("./services/getResults");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("/api/results", async (req, res) => {
  const { value } = req.query;
  const results = await getResults(value);

  return res.json(results);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000, console.log("Running on port 5000"));
