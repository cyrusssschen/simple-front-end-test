const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const dataFeed = require("./data/data-feed.json");

app.get("/api/feed", function(_, res) {
  res.set("Access-Control-Allow-Origin", "*").json(dataFeed);
});

app.listen(port, function() {
  console.log("app listening on port 8080!");
});
