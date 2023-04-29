const express = require("express");
const app = express();
const port = 80;

const server = app.listen(port, "0.0.0.0", () =>
  console.log("Server listening on port " + port)
);

app.get("/", (req, res, next) => {
  res.status(200).send("Yahoo!");
});
