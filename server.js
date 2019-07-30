const express = require("express");
const path = require("path");
var cors = require("cors");
const getResults = require("./services/results.js").getResults;

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/results", async (req, res) => {
  const { value } = req.query;
  const results = await getResults(value);

  return res.json(results);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8888, console.log("Running on port 8888"));
